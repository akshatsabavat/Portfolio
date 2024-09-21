import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { message, email, name } = await req.json();

  if (!message || !email || !name) {
    return NextResponse.json(
      { error: "Please Enter all your details" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: {
      name: "Portfolio Website",
      address: `${email}`,
    },
    to: "sabavatakshat@gmail.com",
    subject: `New Message on Portfolio Website from ${name}`,
    text: `You've received a new message:\n\n${message}`,
    html: `<p>You've received a new message from, [${name}, ${email}]:</p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Server error sending email:", error);
    if (error instanceof Error) {
      console.error(error.message);
    }
    return NextResponse.json(
      {
        success: false,
        error: "Error sending email",
        details: "Something wrong with response",
      },
      { status: 500 }
    );
  }
}
