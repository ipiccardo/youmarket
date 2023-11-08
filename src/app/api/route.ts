import fs from "fs";

export async function GET() {
  try {
    const jsonData = fs.readFileSync("./public/data.json", "utf-8");
    const data = JSON.parse(jsonData);
    return new Response(JSON.stringify(data), {
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

// export async function PUT(request: any) {
//   const res = await request.json();

//   const { newData, newDate } = res;

//   try {
//     const jsonData = fs.readFileSync("./public/data.json", "utf-8");
//     const data = JSON.parse(jsonData);
//     const newObject = {
//       icono: "uparrow",
//       texto: "Carga de Saldo",
//       monto: `+$${newData}`,
//       fecha: newDate,
//     };
//     data.push(newObject);
//     fs.writeFileSync("./public/data.json", JSON.stringify(data, null, 2));
//     return new Response("Valor agregado correctamente", {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Error al agregar el valor al archivo JSON", {
//       status: 500,
//     });
//   }
// }
