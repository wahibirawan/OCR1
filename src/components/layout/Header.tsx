import Link from 'next/link';
import { ScanText, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="flex items-center justify-between w-full max-w-5xl h-14 pl-6 pr-2 bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)] pointer-events-auto">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Image Block */}
                            <rect x="4" y="5" width="8" height="8" rx="2.5" fill="currentColor" />
                            {/* Process Dash */}
                            <rect x="14" y="7" width="6" height="4" rx="2" fill="currentColor" fillOpacity="0.5" />
                            {/* Text Line */}
                            <rect x="4" y="15" width="16" height="4" rx="2" fill="currentColor" fillOpacity="0.8" />
                        </svg>
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-foreground">
                        OCR<span className="text-primary">1</span>
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:bg-black/5 rounded-full">
                        Home
                    </Link>
                    <Link href="/about" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-black/5 rounded-full">
                        About
                    </Link>
                    <Link href="/privacy" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-black/5 rounded-full">
                        Privacy
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5"
                        asChild
                    >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button
                        asChild
                        className="rounded-full px-5 h-10 bg-white text-foreground border-2 border-black/5 shadow-[0_3px_0_0_rgba(0,0,0,0.08)] hover:bg-gray-50 active:translate-y-0.5 active:shadow-none transition-all font-semibold"
                    >
                        <Link href="/how-to">
                            How to use
                        </Link>
                    </Button>
                </div>

            </div>
        </header>
    );
}
