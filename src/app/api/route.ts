export async function GET() {
  try {
    const response = await fetch(
      "https://youmarket-a25af-default-rtdb.firebaseio.com/data.json"
    )
      .then((resp) => resp.json())
      .then((data) => data);

    const dataArray = Object.values(response);

    return new Response(JSON.stringify(dataArray), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Error al leer el archivo JSON.", {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
}
