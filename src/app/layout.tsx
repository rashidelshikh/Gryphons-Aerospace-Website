import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a standard geometric sans
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Gryphons Aerospace",
    description: "University of Guelph's Aerospace Team Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.className, "bg-[#121212] text-white antialiased")}>
                {children}
            </body>
        </html>
    );
}
