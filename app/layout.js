import localFont from "next/font/local";
import "./globals.css";
import { PathProvider } from "./context/PathContext";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Script from "next/script";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Michael Ambel | Full Stack - MERN & Next.js Developer",
    template: "%s | Michael Ambel - Full Stack Web Developer",
  },
  lang: "en",
  description:
    "Full Stack - MERN & Next.js developer leveraging modern tools to build responsive, high-performance, and secure web applications. Skilled in crafting scalable solutions with advanced features like web authentication using JWT, seamless payment integration with PayPal and Stripe, customizable product management, secure checkout systems, and real-time order tracking. Known for delivering sleek, user-friendly UI/UX designs that provide smooth, intuitive experiences across all devices. Focused on building SEO-optimized, fast-loading, and secure platforms that meet the needs of businesses of all sizes.",
  keywords: [
    "MERN Stack Developer",
    "Next.js Expert",
    "Redux Toolkit Specialist",
    "Full Stack Developer Ethiopia",
    "Addis Ababa Web Developer",
    "React Developer Africa",
    "Node.js Developer",
    "TypeScript Developer",
    "Supabase Developer",
    "MongoDB Expert",
    "Freelance Web Developer Ethiopia",
    "Upwork Top Developer",
    "Fiverr Pro Developer",
  ],
  authors: [{ name: "Michael Ambel", url: "https://michaelambel.dev" }],
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: "https://michaelambel.dev",
    siteName: "Michael Ambel - Portfolio",
    title:
      "Michael Ambel | Full Stack Developer - MERN/Next.js Node.js Specialist",
    description:
      "Professional web developer specializing in modern JavaScript frameworks and scalable application architecture",
    images: [
      {
        url: "https://www.michaelambel.dev/michael.svg",
        width: 1200,
        height: 630,
        alt: "Michael Ambel - Professional Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@michaelambel",
    creator: "@michaelambel",
    title: "Michael Ambel | Web Development Expert",
    description:
      "Building the future of web applications with modern technologies",
    images: ["https://www.michaelambel.dev/michael.svg"],
  },
  verification: {
    google: "0Mx5CJjzf7ixkRPRG-6UAjiDJCl0l3ip6jcJdcSK9Dw",
  },
  alternates: {
    canonical: "https://michaelambel.dev",
    types: {
      "application/rss+xml": "https://michaelambel.dev/blog/rss.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta
          property="business:contact_data:website"
          content="https://michaelambel.dev"
        />
        <meta
          name="classification"
          content="Web Development, Software Engineering"
        />
        <meta name="copyright" content="Michael Ambel" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="global" />
        <meta name="rating" content="General" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          type="application/ld+json"
          id="schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Michael Ambel",
              url: "https://michaelambel.dev",
              logo: "https://www.michaelambel.dev/michael.svg",
              image: "https://www.michaelambel.dev/michael.svg",
              description:
                "Professional Full Stack Developer specializing in MERN Stack and Next.js applications",
              jobTitle: "Senior Full Stack Developer",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "ALX",
              },
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "Front-End Web Development",
                url: "https://intranet.alxswe.com/certificates/RPG9SHEPN8",
              },
              sameAs: [
                "https://michaelambel.dev",
                "https://linkedin.com/in/michael-ambel",
                "https://github.com/michael-ambel",
                "https://x.com/michaelambel",
                "https://www.upwork.com/freelancers/~013c5ba6216c9090ed",
                "https://www.fiverr.com/michaelambel",
                "https://dev.to/michael_ambel",
              ],
              knowsAbout: [
                "Web Development",
                "React.js",
                "Next.js",
                "Node.js",
                "Redux Toolkit",
                "TypeScript",
                "MongoDB",
                "Supabase",
                "REST API Development",
                "Frontend Architecture",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "Ethiopia",
              },
              brand: {
                "@type": "Brand",
                name: "Michael Ambel ",
                logo: "https://www.michaelambel.dev/michael.svg",
              },
            }),
          }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-bg text-white cursor-none`}
      >
        <PathProvider>
          <div className="w-full h-screen max-w-[1440px] mx-auto  lg:pt-0 flex flex-row-reverse justify-between">
            <CustomCursor />
            <Navbar />
            <main className="flex-1 ">{children}</main>
          </div>
        </PathProvider>
      </body>
    </html>
  );
}
