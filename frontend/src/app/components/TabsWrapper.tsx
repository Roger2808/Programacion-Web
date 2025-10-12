"use client";

import { useState, ReactNode } from "react";
import Tabs from "./Tabs";

interface TabsWrapperProps {
  children: ReactNode;
}

export default function TabsWrapper({ children }: TabsWrapperProps) {
  const [activeTab, setActiveTab] = useState("hide");

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {children}
    </div>
  );
}
