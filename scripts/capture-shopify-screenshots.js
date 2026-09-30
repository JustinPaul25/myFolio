const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const sites = [
  { id: "acorn-strategy", url: "https://www.acornstrategy.ca" },
  { id: "all-things-cedar", url: "https://allthingscedar.com" },
  { id: "any-baby", url: "https://anybaby.io/" },
  { id: "baehr-feet", url: "https://baehrfeet.com" },
  { id: "bright-source", url: "https://brightsource.ca" },
  { id: "buddyrider", url: "https://buddyrider.com" },
  { id: "c-pros-solutions", url: "https://cprosolutions.com" },
  { id: "coffee-tree", url: "https://coffeetree.ca" },
  { id: "cpe-systems", url: "https://www.cpesystems.com/" },
  { id: "elite-vodka", url: "https://elite-vodka.store/" },
  { id: "everviolet", url: "https://everviolet.com/" },
  { id: "honda-vintage-culture", url: "https://www.hondavintageculture.com/" },
  { id: "jayne", url: "https://shopjayne.com/" },
  { id: "plenty", url: "https://www.getplenty.com/" },
  { id: "sari-beauty", url: "https://saribeauty.ch/" },
  { id: "silverado-saratoga", url: "https://silveradosaratoga.com/" },
  { id: "solid-custom-heirlooms", url: "https://solidcustomheirlooms.com/" },
  { id: "value-buds", url: "https://valuebuds.com/" },
  { id: "zeanoir", url: "https://zeanoir.com/" },
];

const outDir = path.join(__dirname, "..", "public", "images", "projects");
fs.mkdirSync(outDir, { recursive: true });

async function dismissOverlays(page) {
  // Age gates / cookie banners / common dismiss buttons
  const selectors = [
    'button:has-text("YES")',
    'button:has-text("Enter")',
    'button:has-text("ENTER SITE")',
    'button:has-text("Accept")',
    'button:has-text("I Agree")',
    'button:has-text("Got it")',
    'button:has-text("Close")',
    '[aria-label="Close"]',
    ".needsclick button",
  ];

  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 800 })) {
        await el.click({ timeout: 1000 }).catch(() => {});
      }
    } catch {}
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });

  const results = [];

  for (const site of sites) {
    const outPath = path.join(outDir, `${site.id}.jpg`);
    const page = await context.newPage();
    try {
      console.log(`Capturing ${site.id}...`);
      await page.goto(site.url, {
        waitUntil: "domcontentloaded",
        timeout: 45000,
      });
      await page.waitForTimeout(2500);
      await dismissOverlays(page);
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: outPath,
        type: "jpeg",
        quality: 82,
        fullPage: false,
      });
      results.push({ id: site.id, ok: true, path: outPath });
      console.log(`  ✓ ${site.id}`);
    } catch (err) {
      results.push({ id: site.id, ok: false, error: String(err) });
      console.log(`  ✗ ${site.id}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
