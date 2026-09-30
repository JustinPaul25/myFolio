"use client";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "welcome", label: "Welcome Banner" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "reviews", label: "Reviews" },
  { id: "skills", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export default function TabNavigation({
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <div className="border-b border-[rgb(var(--border-color))] bg-[rgb(var(--bg-primary))]">
      <div className="flex gap-1 px-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all relative ${
              activeTab === tab.id
                ? "text-accent"
                : "text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
