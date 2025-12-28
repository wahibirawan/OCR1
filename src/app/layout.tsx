import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    metadataBase: new URL('https://ocr.tor.biz.id'),
    title: {
        default: "OCR1 - Premium Browser-Based OCR",
        template: "%s | OCR1"
    },
    description: "Convert images to text instantly in your browser. 100% private, secure, and free. Powered by WebAssembly and Tesseract.js.",
    keywords: ["OCR", "image to text", "browser ocr", "private ocr", "tesseract.js", "privacy first", "client side ocr", "ocr1"],
    authors: [{ name: "Wahib Irawan", url: "https://github.com/wahibirawan" }],
    creator: "Wahib Irawan",
    publisher: "OCR1",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: 'https://ocr.tor.biz.id',
        title: "OCR1 - Premium Browser-Based OCR",
        description: "Instantly convert images to text without uploading data. 100% private and secure.",
        siteName: "OCR1",
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'OCR1 Preview',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "OCR1 - Premium Browser-Based OCR",
        description: "Instantly convert images to text without uploading data. 100% private and secure.",
        creator: "@wahibirawan",
        images: ["/opengraph-image"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: "Iijzk1zw9hW-JdZVz-vUeAtvYU-_8IRiYNKZXatZ7j4",
    },
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
