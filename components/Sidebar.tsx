"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { useState, type ReactNode } from "react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function NavIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 shrink-0"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const menuItems = [
  {
    id: "welcome",
    label: "Overview",
    icon: (
      <NavIcon>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </NavIcon>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <NavIcon>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
        />
      </NavIcon>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <NavIcon>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </NavIcon>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <NavIcon>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </NavIcon>
    ),
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: (
      <NavIcon>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </NavIcon>
    ),
  },
  {
    id: "skills",
    label: "Tech Stack",
    icon: (
      <NavIcon>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </NavIcon>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    // Envelope — Contact SVG in the request matched Tech Stack's bolt
    icon: (
      <NavIcon>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </NavIcon>
    ),
  },
];

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 inline-flex size-12 items-center justify-center rounded-full text-[#8BBB92] border border-[#12544F]"
        style={{ backgroundColor: "#092328" }}
        aria-label="Toggle menu"
      >
        <svg
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar — always dark (#092328) in both themes */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 h-screen shrink-0 flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ backgroundColor: "#092328", color: "#F8FBF9" }}
      >
        {/* Profile Section */}
        <div
          className="p-6 text-center shrink-0"
          style={{ borderBottom: "1px solid #12544F" }}
        >
          <div
            className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden"
            style={{
              backgroundColor: "#12544F",
              boxShadow: "0 0 0 2px rgba(42, 131, 95, 0.4)",
            }}
          >
            <Image
              src={personalInfo.profilePhoto}
              alt={personalInfo.name}
              width={80}
              height={80}
              sizes="80px"
              className="size-full object-cover object-top"
              priority
            />
          </div>
          <p className="text-lg font-semibold mb-1" style={{ color: "#FFFFFF" }}>
            {personalInfo.name}
          </p>
          <p
            className="text-sm truncate px-2"
            style={{ color: "rgba(139, 187, 146, 0.9)" }}
          >
            {personalInfo.email}
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6 overflow-y-auto min-h-0">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all"
                    style={
                      isActive
                        ? { backgroundColor: "#2A835F", color: "#FFFFFF" }
                        : { backgroundColor: "transparent", color: "#8BBB92" }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "#12544F";
                        e.currentTarget.style.color = "#FFFFFF";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#8BBB92";
                      }
                    }}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Info */}
        <div
          className="p-6 shrink-0"
          style={{ borderTop: "1px solid #12544F" }}
        >
          <div
            className="text-xs space-y-1"
            style={{ color: "rgba(139, 187, 146, 0.75)" }}
          >
            <p>{personalInfo.role}</p>
            <p className="truncate">{personalInfo.location}</p>
          </div>
        </div>
      </aside>
    </>
  );
}
