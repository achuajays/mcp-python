
import { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
  default?: boolean;
}

interface TabGroupProps {
  tabs: TabItem[];
  className?: string;
}

const TabGroup = ({ tabs, className }: TabGroupProps) => {
  const defaultTab = tabs.find(tab => tab.default)?.key || tabs[0]?.key;
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  // Store tab preference in localStorage
  useEffect(() => {
    if (activeTab) {
      localStorage.setItem('mcp-docs-tab-preference', activeTab);
    }
  }, [activeTab]);
  
  // Restore preference from localStorage
  useEffect(() => {
    const savedPreference = localStorage.getItem('mcp-docs-tab-preference');
    if (savedPreference && tabs.some(tab => tab.key === savedPreference)) {
      setActiveTab(savedPreference);
    }
  }, [tabs]);

  return (
    <Tabs 
      value={activeTab} 
      onValueChange={setActiveTab}
      className={cn("w-full", className)}
    >
      <TabsList className="w-full flex bg-muted mb-2">
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab.key} 
            value={tab.key}
            className="flex-1"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.key} value={tab.key}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabGroup;
