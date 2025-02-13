"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import FocusNavbar from "@/components/common/FocusNavbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname(); 

  return (
    <html lang="en">
      <body>
        {pathname === "/" ? <Navbar /> : <FocusNavbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
