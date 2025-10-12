"use client";

import { useState } from "react";

export default function RevealSecretForm() {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReveal = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage(null);

    try {
      const res = await fetch(`http://localhost:8000/api/secrets/${key}/`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error");

      setMessage(data.message);
    } catch {
      setError("El secreto no existe o ya fue revelado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleReveal} className="space-y-4">
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Introduce tu clave o código secreto"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading || !key.trim()}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Revelando..." : "Revelar secreto"}
        </button>
      </form>

      {message && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 border border-green-300 rounded-lg">
          <strong>Secreto:</strong> {message}
        </div>
      )}

      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
    </div>
  );
}
