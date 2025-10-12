"use client";

import { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function Reveal() {
  const [key, setKey] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const revealSecret = async () => {
    const res = await fetch("http://localhost:8000/api/reveal/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div className="container">
      <TextInput value={key} onChange={(e) => setKey(e.target.value)} placeholder="Ingresa tu key" />
      <Button onClick={revealSecret}>Revelar</Button>
      {message && <p>{message}</p>}
    </div>
  );
}
