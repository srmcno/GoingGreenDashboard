export async function fetchFlowData(): Promise<any> {
  const endpoint = import.meta.env.VITE_FLOW_ENDPOINT;

  if (!endpoint) {
    throw new Error("Missing VITE_FLOW_ENDPOINT in .env");
  }

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Request failed: ${response.status} ${response.statusText} - ${text}`
    );
  }

  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}
