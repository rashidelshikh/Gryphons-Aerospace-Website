import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas_neue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

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
            <body className={clsx(inter.className, bebas_neue.variable, "bg-[#F9F9F9] text-gray-900 antialiased")}>
                {children}
            </body>
        </html>
    );
}
