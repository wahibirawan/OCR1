import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "OCR1 - Advanced OCR Tool",
    description: "Fast, private, and secure OCR directly in your browser.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
            <body className={`${GeistSans.className} min-h-screen flex flex-col bg-background antialiased selection:bg-primary/20`}>
                <Header />
                <main className="flex-1 pt-24">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
