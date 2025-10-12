"use client";

import { useState } from "react";
import Tabs from "./components/Tabs";
import HideSecretForm from "./components/HideSecretForm";
import RevealSecretForm from "./components/RevealSecretFrom";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("hide");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">🔒 Secret Link</h1>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-6">
          {activeTab === "hide" ? <HideSecretForm /> : <RevealSecretForm />}
        </div>
      </div>
    </main>
  );
}
