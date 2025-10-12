"use client";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex justify-center space-x-4 border-b border-gray-300 pb-2">
      <button
        onClick={() => setActiveTab("hide")}
        className={`px-4 py-2 rounded-t-lg font-medium transition ${
          activeTab === "hide"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Ocultar
      </button>

      <button
        onClick={() => setActiveTab("reveal")}
        className={`px-4 py-2 rounded-t-lg font-medium transition ${
          activeTab === "reveal"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Revelar
      </button>
    </div>
  );
}
