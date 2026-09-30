const fs = require("fs");
const path = "data/portfolio.ts";
let s = fs.readFileSync(path, "utf8");

const ids = [
  "acorn-strategy",
  "all-things-cedar",
  "any-baby",
  "baehr-feet",
  "bright-source",
  "buddyrider",
  "c-pros-solutions",
  "coffee-tree",
  "cpe-systems",
  "elite-vodka",
  "everviolet",
  "honda-vintage-culture",
  "jayne",
  "plenty",
  "sari-beauty",
  "silverado-saratoga",
  "solid-custom-heirlooms",
  "value-buds",
  "zeanoir",
];

for (const id of ids) {
  const re = new RegExp(`(id: "${id}"[\\s\\S]*?category: "shopify",)`);
  s = s.replace(re, (m) => {
    if (m.includes("image:")) return m;
    return m.replace(
      `category: "shopify",`,
      `category: "shopify",\n    image: "/images/projects/${id}.jpg",`
    );
  });
}

fs.writeFileSync(path, s);
console.log("updated portfolio images");
