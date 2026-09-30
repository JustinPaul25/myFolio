import { personalInfo, socialLinks } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site";

export default function JsonLd() {
  const siteUrl = getSiteUrl();
  const sameAs = socialLinks
    .filter((link) => link.platform !== "Email")
    .map((link) => link.url);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.headline,
    url: siteUrl,
    email: personalInfo.email,
    image: `${siteUrl}${personalInfo.profilePhoto}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Panabo City",
      addressCountry: "PH",
    },
    sameAs,
    knowsAbout: [
      "Shopify",
      "Shopify Plus",
      "Liquid",
      "Checkout Extensibility",
      "Ecommerce Development",
      "Theme Development",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalInfo.name} | ${personalInfo.role}`,
    url: siteUrl,
    description: `${personalInfo.headline}. ${personalInfo.subheadline}`,
    author: { "@type": "Person", name: personalInfo.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
