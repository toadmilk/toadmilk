import { NextResponse } from 'next/server';

export async function GET() {
  const apiPath = 'https://u-26574797.modapi.io/v1';
  const gameId = 2869;
  const modIds = [2953729, 2362049];
  const apiKey = process.env.MODIO_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key not found in environment variables" }, { status: 500 });
  }

  try {
    const fetchPromises = modIds.map(modId => {
      const url = `${apiPath}/games/${gameId}/mods/${modId}?api_key=${apiKey}`;
      return fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }).then(response => response.ok ? response.json() : response.json().then(errorData => ({ error: errorData.message })));
    });

    const results = await Promise.all(fetchPromises);

    const data = results.map((result, index) => ({
      modId: modIds[index],
      ...(result.error ? { error: result.error } : result)
    }));

    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error: "Server error occurred" }, { status: 500 });
  }
}