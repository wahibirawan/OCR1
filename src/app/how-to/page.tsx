import Link from "next/link";

export default function HowToPage() {
    return (
        <div className="container mx-auto px-6 py-24 max-w-4xl">
            <div className="space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">How it Works</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get perfectly accurate text from your images in seconds. No complex setup required.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Step 1 */}
                    <div className="bg-secondary/30 p-8 rounded-3xl border border-black/[0.04] space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-12 h-12 rounded-xl bg-white border-2 border-primary/10 shadow-[2px_2px_0_0_rgba(0,0,0,0.05)] flex items-center justify-center text-xl font-bold text-foreground">
                            1
                        </div>
                        <h3 className="text-lg font-semibold">Upload Image</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Drag and drop any image file (PNG, JPG, WebP) into the upload area, or click to browse your device.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-secondary/30 p-8 rounded-3xl border border-black/[0.04] space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-12 h-12 rounded-xl bg-white border-2 border-primary/10 shadow-[2px_2px_0_0_rgba(0,0,0,0.05)] flex items-center justify-center text-xl font-bold text-foreground">
                            2
                        </div>
                        <h3 className="text-lg font-semibold">Auto-Process</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our secure client-side engine automatically recognizes text. Your data never leaves your browser.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-secondary/30 p-8 rounded-3xl border border-black/[0.04] space-y-4 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-12 h-12 rounded-xl bg-white border-2 border-primary/10 shadow-[2px_2px_0_0_rgba(0,0,0,0.05)] flex items-center justify-center text-xl font-bold text-foreground">
                            3
                        </div>
                        <h3 className="text-lg font-semibold">Copy & Use</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Review the extracted text in the editor, make any quick edits, and copy it to your clipboard with one click.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8">
                    <Link href="/" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-bold text-primary-foreground shadow-[0_6px_0_0_hsl(217,91%,45%)] transition-all duration-150 hover:bg-primary/90 hover:shadow-[0_8px_0_0_hsl(217,91%,45%)] hover:-translate-y-0.5 active:translate-y-1.5 active:shadow-[0_0px_0_0_hsl(217,91%,45%)]">
                        <span className="relative flex items-center gap-2 text-lg">
                            Start Converting Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
