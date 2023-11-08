import fs from "fs";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  const res = await request.json();

  const { newData, newDate } = res;

  try {
    const jsonData = fs.readFileSync("./public/data.json", "utf-8");
    const data = JSON.parse(jsonData);
    const newObject = {
      icono: "uparrow",
      texto: "Carga de Saldo",
      monto: `+$${newData}`,
      fecha: newDate,
    };
    data.push(newObject);
    fs.writeFileSync("./public/data.json", JSON.stringify(data, null, 2));
    return new Response("Valor agregado correctamente", {
      status: 200,
    });
  } catch (error) {
    return new Response("Error al agregar el valor al archivo JSON", {
      status: 500,
    });
  }
}
