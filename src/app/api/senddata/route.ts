import fs from "fs";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  const res = await request.json();

  const { newData, newDate } = res;

  try {
    const response = await fetch(
      "https://youmarket-a25af-default-rtdb.firebaseio.com/data.json"
    ).then((resp) => resp.json());

    const dataArray = Object.values(response);

    const newObject = {
      icono: "uparrow",
      texto: "Carga de Saldo",
      monto: `+$${newData}`,
      fecha: newDate,
    };

    dataArray.push(newObject);

    await fetch(
      "https://youmarket-a25af-default-rtdb.firebaseio.com/data.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataArray),
      }
    );

    return new Response("Valor agregado correctamente", {
      status: 200,
    });
  } catch (error) {
    return new Response("Error al agregar el valor al archivo JSON", {
      status: 500,
    });
  }
}
