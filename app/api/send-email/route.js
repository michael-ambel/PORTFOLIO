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
    // Create a transporter using environment variables for security
    const webMailTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await webMailTransporter.sendMail({
      from: `"Michael" <${process.env.SMTP_USER}>`,
      to: email,
      bcc: process.env.SMTP_USER,
      subject: `Got your message, ${name}! 😊`, // Friendly subject
      text: `Hi ${name},\n\nThanks so much for getting in touch! I've received your message, and I'll reply here soon.\n\nHere's a copy of your message:\n\n---\nSubject: ${subject}\nMessage: ${message}\n---\n\nKind regards,\nMichael Ambel`,
    });

    await webMailTransporter.sendMail({
      from: `"Michael" <${process.env.SMTP_USER}>`,
      to: process.env.GMAIL_USER, // Your email address
      subject: `Contact from ${name}, ${subject}`,
      text: `You received a new contact form submission:\n\nName: ${name}, Email: ${email}\n\nSubject: ${subject}\n\nMessage:${message}\n\n---\nReply directly to this email to follow up.`,
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

// webMailTransporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log("Error sending email:", error);
//   } else {
//     console.log("Email sent:", info.response);
//   }
// });

// try {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com", // Use the host instead of `service`
//     port: 587, // Port for secure email
//     secure: false, // Use TLS
//     // service: "gmail",
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: email,
//     to: process.env.GMAIL_USER,
//     // cc: 'your_email@gmail.com',
//     subject: `Contact Form: ${subject}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: \n${message}`,
//   });

//   await transporter.sendMail({
//     from: `"Michael Ambel" <${process.env.GMAIL_USER}>`,
//     to: email,

//     subject: `Thank you for reaching out, ${name}!`,
//     text: `Hi ${name},\n\nThank you for contacting me. I will get back to you soon.\n\nKind regards,\nMichael Ambel`,
//   });

//     return new Response(
//       JSON.stringify({ message: "Emails sent successfully!" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ message: "Failed to send emails." }), {
//       status: 500,
//     });
//   }
// }
