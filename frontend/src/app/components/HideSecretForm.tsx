"use client";

import { useState } from "react";
import { createSecret } from "../lib/api";

export default function HideSecretForm() {
  const [content, setContent] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setLink(null);

    try {
      const data = await createSecret(content);
      setLink(data.secret_url);
    } catch {
      setError("Error al crear el enlace. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe tu mensaje secreto..."
          className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading || !content.trim()}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Generando..." : "Generar enlace secreto"}
        </button>
      </form>

      {link && (
        <p className="mt-4 text-green-600 text-center font-semibold break-all">
          Tu enlace secreto (una sola vez):{" "}
          <a href={link} target="_blank" rel="noopener noreferrer" className="underline">
            {link}
          </a>
        </p>
      )}

      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
    </div>
  );
}
