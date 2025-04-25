"use client";
import Navbar from "@/components/common/Navbar";
import FocusNavbar from "@/components/common/Focusnavbar"; 
import Footer from "@/components/common/Footer";
import Focusfooter from "@/components/common/Focusfooter";
import { usePathname } from 'next/navigation'; 
import "./globals.css";
import ConsultationSidebar from "@/components/ConsultationSidebar";
import Head from "next/head";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isFocusOverseas = pathname.startsWith("/focus-overseas");

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Novello Educare - Expert guidance for students looking to study abroad. Get personalized counseling for international education opportunities." />
        <meta name="keywords" content="study abroad, international education, overseas education, student visa, college application, university admission, study visa, education consultants, Novello Educare" />
        <meta name="author" content="Novello Educare" />
        
        {/* Open Graph Tags for social sharing */}
        <meta property="og:title" content="Novello Educare - Study Abroad Consultants" />
        <meta property="og:description" content="Expert guidance for students looking to study abroad with personalized counseling and support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novelloeducare.com/" />
        <meta property="og:image" content="https://novelloeducare.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Novello Educare - Study Abroad Consultants" />
        <meta name="twitter:description" content="Expert guidance for students looking to study abroad with personalized counseling and support." />
        <meta name="twitter:image" content="https://novelloeducare.com/twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://novelloeducare.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <title>Novello Educare - Study Abroad Consultants</title>
      </head>
      <body>
        {isFocusOverseas ? (
          <FocusNavbar isFocusOverseas={true} />
        ) : (
          <Navbar isFocusOverseas={false} />
        )}
        <main>{children}</main>

        {isFocusOverseas ? (
          <Focusfooter isFocusOverseas={true} />
        ) : (
          <Footer isFocusOverseas={false} />
        )}

        <ConsultationSidebar />
      </body>
    </html>
  );
}