const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function createSecret(content: string) {
  const response = await fetch(`${BASE_URL}/secrets/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error("Error creating secret");
  }

  return response.json();
}
