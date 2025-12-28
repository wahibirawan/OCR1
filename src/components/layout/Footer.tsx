import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-black/[0.04] bg-white/50 backdrop-blur-sm mt-auto">
            <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-center md:text-left space-y-2">
                    <p className="text-sm font-medium text-foreground">
                        OCR1 &copy; {new Date().getFullYear()}
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                        100% Client-side. No images are uploaded to any server.
                        Built with Tesseract.js and Next.js.
                    </p>
                </div>

                <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/about" className="hover:text-foreground transition-colors">
                        About
                    </Link>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </footer>
    );
}
