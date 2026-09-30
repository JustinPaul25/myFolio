"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [activeTab, setActiveTab] = useState("welcome");

  const renderTabContent = () => {
    switch (activeTab) {
      case "welcome":
        return <Hero onNavigate={setActiveTab} />;
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "reviews":
        return <Reviews />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <Hero onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col h-screen min-w-0 overflow-hidden">
        <div className="shrink-0 z-30 bg-[rgb(var(--bg-primary))] border-b border-[rgb(var(--border-color))] px-6 py-4 flex justify-end">
          <ThemeToggle />
        </div>

        <main className="flex flex-1 min-h-0 flex-col overflow-y-auto overflow-x-hidden bg-[rgb(var(--bg-primary))]">
          <div key={activeTab} className="animate-fadeIn flex flex-1 flex-col">
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
