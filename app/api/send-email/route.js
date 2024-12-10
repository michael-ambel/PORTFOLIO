import nodemailer from "nodemailer";

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    console.log({ name, email, subject, message });
    return new Response(
      JSON.stringify({ message: "All fields are required." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: \n${message}`,
    });

    await transporter.sendMail({
      from: `"Michael Ambel" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      text: `Hi ${name},\n\nThank you for contacting me. I will get back to you soon.\n\nKind regards,\nMichael Ambel`,
    });

    return new Response(
      JSON.stringify({ message: "Emails sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to send emails." }), {
      status: 500,
    });
  }
}
