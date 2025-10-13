const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function createSecret(message: string) {
  const response = await fetch(`${BASE_URL}/hide/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Error creating secret");
  }

  return response.json();
}
