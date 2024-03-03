import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Views/Navbar";
import Wrapper from "@/components/Views/Wrapper";
import { Footer } from "@/components/Views/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saras Trading Co.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  );
}
