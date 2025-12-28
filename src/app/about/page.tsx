
export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-16 max-w-3xl">
            <h1 className="text-4xl font-medium tracking-tight mb-8">About OCR1</h1>

            <div className="prose prose-lg prose-gray dark:prose-invert">
                <p className="lead text-xl text-muted-foreground mb-12">
                    We believe in privacy-first tools. OCR1 is built to demonstrate what's possible with modern web technologies like WebAssembly.
                </p>

                <h2 className="text-2xl font-medium mb-4">How it works</h2>
                <p className="text-muted-foreground mb-8">
                    Traditional OCR tools upload your images to a server for processing. This creates privacy risks and latency.
                    OCR1 uses a customized version of Tesseract.js to run the optical character recognition engine entirely within your browser.
                    The neural networks and logic are downloaded once, and then run locally on your device's CPU.
                </p>

                <h2 className="text-2xl font-medium mb-4">The Technology</h2>
                <ul className="space-y-2 text-muted-foreground mb-8 list-disc pl-5">
                    <li><strong>Tesseract.js</strong>: The industry standard for open-source OCR.</li>
                    <li><strong>WebAssembly (WASM)</strong>: For near-native performance in the browser.</li>
                    <li><strong>Next.js 15</strong>: For a robust, fast application framework.</li>
                    <li><strong>Tailwind CSS</strong>: For the modern, responsive design system.</li>
                </ul>

                <h2 className="text-2xl font-medium mb-4">Open Source</h2>
                <p className="text-muted-foreground">
                    This project is open source. You can view the code, contribute, or fork it on our GitHub repository.
                    We welcome feedback and contributions from the community.
                </p>
            </div>
        </div>
    );
}
