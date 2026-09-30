/**
 * Generates a compact 2-page Word resume from data/portfolio.ts
 * Run: npm run resume
 */
import { mkdirSync } from "fs";
import { join } from "path";
import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  TextRun,
  ExternalHyperlink,
  LevelFormat,
} from "docx";
import { writeFile } from "fs/promises";
import {
  about,
  personalInfo,
  projects,
  skillCategories,
  socialLinks,
  workExperience,
} from "../data/portfolio";
import { getSiteUrl } from "../lib/site";

const ACCENT = "2A835F";
const MUTED = "555555";
const DARK = "092328";

/** Prefer these Shopify stores for a tight project section */
const FEATURED_SHOPIFY_IDS = [
  "buddyrider",
  "c-pros-solutions",
  "cpe-systems",
  "any-baby",
  "value-buds",
  "zeanoir",
];

function sectionHeading(text: string): Paragraph {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 10, color: ACCENT, space: 6 },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 20,
        font: "Calibri",
        color: DARK,
      }),
    ],
  });
}

function bodyParagraph(text: string, options?: { after?: number; size?: number }): Paragraph {
  return new Paragraph({
    spacing: { after: options?.after ?? 80, line: 240 },
    children: [
      new TextRun({
        text,
        size: options?.size ?? 18,
        font: "Calibri",
        color: "222222",
      }),
    ],
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 36, line: 230 },
    children: [
      new TextRun({
        text,
        size: 18,
        font: "Calibri",
        color: "222222",
      }),
    ],
  });
}

function linkRun(label: string, url: string): ExternalHyperlink {
  return new ExternalHyperlink({
    children: [
      new TextRun({
        text: label,
        size: 16,
        font: "Calibri",
        color: ACCENT,
        underline: {},
      }),
    ],
    link: url,
  });
}

async function main() {
  const github = socialLinks.find((l) => l.platform === "GitHub")?.url ?? "";
  const linkedin = socialLinks.find((l) => l.platform === "LinkedIn")?.url ?? "";
  const siteUrl = getSiteUrl();
  const portfolioUrl =
    siteUrl.includes("localhost") || siteUrl.includes("127.0.0.1")
      ? ""
      : siteUrl;

  const shopifyById = new Map(
    projects.filter((p) => p.category === "shopify").map((p) => [p.id, p])
  );
  const selectedShopify = FEATURED_SHOPIFY_IDS.map((id) => shopifyById.get(id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  const fullstackHighlight =
    projects.find((p) => p.id === "iwhistle") ??
    projects.find((p) => p.category === "fullstack");

  const shopifyCount = projects.filter((p) => p.category === "shopify").length;

  const summary = [
    `Shopify Developer with ${personalInfo.experience} in the Shopify ecosystem — custom themes, Shopify Plus, checkout extensibility, and CRO.`,
    about.paragraphs[0]
      .replace(/^I'm a Shopify developer with over \d+\+? years of experience /, "")
      .replace(/^./, (c) => c.toUpperCase()),
    "Full-stack background (Laravel, Vue.js, React) supports stronger theme architecture, Metafields, and GraphQL Admin API integrations.",
  ].join(" ");

  const contactParts: (TextRun | ExternalHyperlink)[] = [
    new TextRun({ text: personalInfo.email, size: 16, font: "Calibri", color: MUTED }),
    new TextRun({ text: "  ·  ", size: 16, font: "Calibri", color: MUTED }),
    new TextRun({ text: personalInfo.whatsapp, size: 16, font: "Calibri", color: MUTED }),
    new TextRun({ text: "  ·  ", size: 16, font: "Calibri", color: MUTED }),
    new TextRun({ text: personalInfo.location, size: 16, font: "Calibri", color: MUTED }),
  ];

  if (linkedin) {
    contactParts.push(
      new TextRun({ text: "  ·  ", size: 16, font: "Calibri", color: MUTED }),
      linkRun("LinkedIn", linkedin)
    );
  }
  if (github) {
    contactParts.push(
      new TextRun({ text: "  ·  ", size: 16, font: "Calibri", color: MUTED }),
      linkRun("GitHub", github)
    );
  }
  if (portfolioUrl) {
    contactParts.push(
      new TextRun({ text: "  ·  ", size: 16, font: "Calibri", color: MUTED }),
      linkRun("Portfolio", portfolioUrl)
    );
  }

  const children: Paragraph[] = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: personalInfo.name,
          bold: true,
          size: 32,
          font: "Calibri",
          color: DARK,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: `${personalInfo.role}  ·  ${personalInfo.experience} experience  ·  ${personalInfo.availability}`,
          size: 18,
          font: "Calibri",
          color: ACCENT,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 140 },
      children: contactParts,
    }),

    sectionHeading("Professional Summary"),
    bodyParagraph(summary, { after: 60 }),

    sectionHeading("Technical Skills"),
    ...skillCategories.map(
      (cat) =>
        new Paragraph({
          spacing: { after: 40, line: 230 },
          children: [
            new TextRun({
              text: `${cat.category}: `,
              bold: true,
              size: 17,
              font: "Calibri",
              color: DARK,
            }),
            new TextRun({
              text: cat.skills.join(" · "),
              size: 17,
              font: "Calibri",
              color: "222222",
            }),
          ],
        })
    ),

    sectionHeading("Work Experience"),
  ];

  workExperience.forEach((job, index) => {
    const maxBullets = index === 0 ? 3 : 2;
    const duties = job.duties.slice(0, maxBullets);

    children.push(
      new Paragraph({
        spacing: { before: 100, after: 20 },
        children: [
          new TextRun({
            text: job.position,
            bold: true,
            size: 19,
            font: "Calibri",
            color: DARK,
          }),
          new TextRun({
            text: `  |  ${job.startDate} – ${job.endDate}`,
            size: 16,
            font: "Calibri",
            color: MUTED,
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({
            text: job.company,
            size: 17,
            font: "Calibri",
            color: ACCENT,
            bold: true,
          }),
        ],
      }),
      ...duties.map((d) => bullet(d))
    );
  });

  children.push(sectionHeading("Selected Projects"));
  children.push(
    bodyParagraph(
      `${shopifyCount}+ Shopify client stores shipped. Highlights below — full case studies and live links on portfolio.`,
      { after: 60, size: 17 }
    )
  );

  for (const project of selectedShopify) {
    const line: (TextRun | ExternalHyperlink)[] = [
      new TextRun({
        text: project.title,
        bold: true,
        size: 17,
        font: "Calibri",
        color: DARK,
      }),
      new TextRun({
        text: ` — ${project.description}`,
        size: 17,
        font: "Calibri",
        color: "222222",
      }),
    ];

    if (project.url && !project.linkNote) {
      line.push(
        new TextRun({ text: "  ", size: 16, font: "Calibri" }),
        linkRun(project.url.replace(/^https?:\/\//, "").replace(/\/$/, ""), project.url)
      );
    }

    children.push(
      new Paragraph({
        spacing: { before: 50, after: 20, line: 230 },
        children: line,
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({
            text: project.tags.slice(0, 4).join(" · "),
            size: 15,
            font: "Calibri",
            color: MUTED,
            italics: true,
          }),
        ],
      })
    );
  }

  if (fullstackHighlight) {
    children.push(
      new Paragraph({
        spacing: { before: 50, after: 20, line: 230 },
        children: [
          new TextRun({
            text: fullstackHighlight.title,
            bold: true,
            size: 17,
            font: "Calibri",
            color: DARK,
          }),
          new TextRun({
            text: ` — ${fullstackHighlight.description}`,
            size: 17,
            font: "Calibri",
            color: "222222",
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({
            text: fullstackHighlight.tags.slice(0, 5).join(" · "),
            size: 15,
            font: "Calibri",
            color: MUTED,
            italics: true,
          }),
        ],
      })
    );
  }

  if (linkedin || github || portfolioUrl) {
    const more: (TextRun | ExternalHyperlink)[] = [
      new TextRun({
        text: "More work & reviews: ",
        size: 16,
        font: "Calibri",
        color: MUTED,
      }),
    ];
    if (portfolioUrl) {
      more.push(linkRun("Portfolio", portfolioUrl));
      more.push(new TextRun({ text: "  ·  ", size: 16, font: "Calibri", color: MUTED }));
    }
    if (linkedin) {
      more.push(linkRun("LinkedIn", linkedin));
      more.push(new TextRun({ text: "  ·  ", size: 16, font: "Calibri", color: MUTED }));
    }
    if (github) {
      more.push(linkRun("GitHub", github));
    }

    children.push(
      new Paragraph({
        spacing: { before: 120, after: 0 },
        children: more,
      })
    );
  }

  const doc = new Document({
    creator: personalInfo.name,
    title: `${personalInfo.name} — Resume`,
    description: personalInfo.headline,
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "•",
              alignment: AlignmentType.LEFT,
              style: {
                paragraph: {
                  indent: { left: 288, hanging: 144 },
                },
              },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 540,
              bottom: 540,
              left: 630,
              right: 630,
            },
          },
        },
        children,
      },
    ],
  });

  const outDir = join(process.cwd(), "docs");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "Justin-Paul-Layan-Resume.docx");
  const buffer = await Packer.toBuffer(doc);

  try {
    await writeFile(outPath, buffer);
    console.log(`2-page resume written to ${outPath}`);
  } catch (err) {
    const fallback = join(outDir, "Justin-Paul-Layan-Resume-2page.docx");
    await writeFile(fallback, buffer);
    console.warn(`Could not overwrite locked file. Wrote: ${fallback}`);
    console.warn(String(err));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
