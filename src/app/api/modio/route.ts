import { NextResponse } from 'next/server';

export async function GET() {
  const apiPath = 'https://u-26574797.modapi.io/v1';
  const gameId = 2869;
  const modId = 2953729;
  const apiKey = process.env.MODIO_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key not found in environment variables" }, { status: 500 });
  }

  const url = `${apiPath}/games/${gameId}/mods/${modId}?api_key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.message || "Failed to fetch data" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error: "Server error occurred" }, { status: 500 });
  }
}