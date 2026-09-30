import type { IconType } from "react-icons";
import {
  SiShopify,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiRuby,
  SiGithub,
  SiGraphql,
  SiCursor,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineLightningBolt,
  HiOutlineCube,
  HiOutlineTerminal,
  HiOutlineCollection,
  HiOutlineShoppingCart,
  HiOutlineDatabase,
  HiOutlineCog,
  HiOutlineMail,
  HiOutlineRefresh,
  HiOutlineStar,
  HiOutlineTemplate,
  HiOutlineDeviceMobile,
  HiOutlineEye,
  HiOutlineChartBar,
  HiOutlineServer,
} from "react-icons/hi";

const skillIcons: Record<string, IconType> = {
  // Shopify
  Liquid: HiOutlineCode,
  "Shopify Plus": SiShopify,
  "Checkout Extensibility": HiOutlineShoppingCart,
  Metafields: HiOutlineDatabase,
  "Shopify CLI": HiOutlineTerminal,
  "Theme Kit": HiOutlineTemplate,
  "Storefront API": HiOutlineCube,
  "GraphQL Admin API": SiGraphql,
  "Product & Order APIs": HiOutlineCollection,
  // Frontend
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Vue.js": SiVuedotjs,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Responsive Design": HiOutlineDeviceMobile,
  "Web Performance": HiOutlineLightningBolt,
  Accessibility: HiOutlineEye,
  // Backend & Tools
  Ruby: SiRuby,
  Laravel: SiLaravel,
  PHP: SiPhp,
  "RESTful APIs": HiOutlineServer,
  "Git & GitHub": SiGithub,
  Cursor: SiCursor,
  "Laravel Forge": HiOutlineCog,
  Klaviyo: HiOutlineMail,
  Recharge: HiOutlineRefresh,
  "Judge.me": HiOutlineStar,
  Matrixify: HiOutlineChartBar,
};

export function getSkillIcon(skill: string): IconType {
  return skillIcons[skill] ?? HiOutlineDesktopComputer;
}
