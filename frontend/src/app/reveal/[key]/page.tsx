"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function RevealPage() {
  const params = useParams();
  const key = params.key;
  const [message, setMessage] = useState<string>("Cargando...");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!key) return;

    const fetchMessage = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
        const res = await fetch(`${API_URL}/reveal/${key}/`);
        const data = await res.json();

        if (res.ok) {
          setMessage(data.message);
          setError("");
        } else {
          setMessage("");
          setError(data.error || "Error al revelar el mensaje.");
        }
      } catch {
        setMessage("");
        setError("No se pudo conectar con el servidor.");
      }
    };

    fetchMessage();
  }, [key]);

  return (
    <div className="container mx-auto p-6 max-w-lg text-center">
      <h1 className="text-2xl font-bold mb-4">Mensaje Secreto</h1>
      {message && <p className="p-4 bg-green-100 text-green-800 rounded-md">{message}</p>}
      {error && <p className="p-4 bg-red-100 text-red-800 rounded-md">{error}</p>}
    </div>
  );
}
