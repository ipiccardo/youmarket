import { type NextRequest } from "next/server";
import nodemailer, { TransportOptions } from "nodemailer";

type CustomTransportOptions = TransportOptions & {
  host: string;
  port: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "",
  port: process.env.SMTP_PORT || "",
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
} as TransportOptions);

transporter.verify(function (error) {
  if (error) {
    console.log(error, "Inside de Error");
  } else {
    console.log("Server is ready to take our messages");
  }
});

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { destinatario, asunto, contenido } = req;

    const mailOptions = {
      from: "youmarketauth@gmail.com",
      to: destinatario,
      subject: asunto,
      text: `Hola ¿Cómo estás? el pin para poder ingresar es: ${contenido}`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });

    return new Response(
      JSON.stringify({ message: "Correo enviado con éxito" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error al enviar el correo: " + error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
