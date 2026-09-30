const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await page.goto("https://valuebuds.com/", {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.waitForTimeout(2000);

  for (const text of ["YES", "ENTER SITE", "ENTER", "CONTINUE AS GUEST", "NOT NOW"]) {
    try {
      const btn = page.locator(`button:has-text("${text}")`).first();
      if (await btn.isVisible({ timeout: 1200 })) {
        await btn.click();
        await page.waitForTimeout(1200);
      }
    } catch {}
  }

  // Dismiss location modal if still present
  try {
    const notNow = page.getByRole("button", { name: /not now/i }).first();
    if (await notNow.isVisible({ timeout: 1500 })) {
      await notNow.click();
      await page.waitForTimeout(1500);
    }
  } catch {}

  await page.waitForTimeout(1500);
  await page.screenshot({
    path: "public/images/projects/value-buds.jpg",
    type: "jpeg",
    quality: 82,
  });
  await browser.close();
  console.log("value-buds updated");
})();
