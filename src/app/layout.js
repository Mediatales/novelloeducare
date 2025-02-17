"use client";
import Navbar from "@/components/common/Navbar";
import FocusNavbar from "@/components/common/Focusnavbar"; 
import Footer from "@/components/common/Footer";
import Focusfooter from "@/components/common/Focusfooter";
import { usePathname } from 'next/navigation'; 
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isFocusOverseas = pathname.startsWith("/focus-overseas");

  return (
    <html lang="en"> 
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
      </body>
    </html>
  );
}
