import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { PathProvider } from "./context/PathContext";
import CustomCursor from "./components/CustomCursor";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata = {
  title:
    "Michael Ambel | MERN Stack Web Developer & Designer in Addis Ababa, Ethiopia",
  description:
    "I'm Michael Ambel, a passionate MERN Stack web developer and designer based in Addis Ababa, Ethiopia. I specialize in creating user-friendly, visually appealing, and high-performance web applications. Hire me on Upwork, Fiverr, or directly for your next project!",
  keywords:
    "web developer, web designer, front-end developer, back-end, developer, back-end developer, full-stack, full-stack developer, MERN stack, React, Next.js, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, Redux, Redux Toolkit, Zustand, Supabase, Bootstrap, postman, figma, Ethiopia, Addis Ababa, African web developer, Ethiopian web developer, freelance web developer, Upwork, Fiverr, freelance platform, best freelance, best African web developer, best Ethiopian web developer, best freelance web developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-bg text-white cursor-none`}
      >
        <PathProvider>
          <div className="w-full h-screen max-w-[1440px] mx-auto  flex flex-row-reverse justify-between">
            <CustomCursor />
            <Navbar />
            {children}
          </div>
        </PathProvider>
      </body>
    </html>
  );
}
