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

  // // Create a transporter using environment variables for security
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: process.env.SMTP_PORT,
  //   secure: process.env.SMTP_SECURE,
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASSWORD,
  //   },
  // });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_GMAIL_USER,
        pass: process.env.NEXT_GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      // cc: 'your_email@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: \n${message}`,
    });

    await transporter.sendMail({
      from: `"Michael Ambel" <${process.env.NEXT_GMAIL_USER}>`,
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
