
export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-6 py-16 max-w-3xl">
            <h1 className="text-4xl font-medium tracking-tight mb-8">Privacy Policy</h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                    <p className="font-medium text-foreground mb-2">Short Version</p>
                    <p>
                        We do not collect your data. Your files are processed entirely on your own device.
                        No image data is ever sent to our servers.
                    </p>
                </div>

                <section>
                    <h2 className="text-xl font-medium text-foreground mb-3">Data Collection</h2>
                    <p>
                        OCR1 does not collect, store, or transmit any personal information or file data.
                        The file processing occurs locally in your web browser using WebAssembly technology.
                        Since there is no backend server for processing, it is technically impossible for us to intercept your files.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-medium text-foreground mb-3">Analytics</h2>
                    <p>
                        We may collect anonymous usage statistics (e.g., page views) to help improve the application.
                        This data is aggregated and contains no personally identifiable information.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-medium text-foreground mb-3">Local Storage</h2>
                    <p>
                        The application may store language data files (trained models for Tesseract) in your browser's
                        cache or IndexedDB to speed up future visits and enable offline capability.
                        You can clear this storage at any time via your browser settings.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-medium text-foreground mb-3">Contact</h2>
                    <p>
                        If you have any questions or concerns about this privacy policy, please open an issue on our GitHub repository.
                    </p>
                </section>
            </div>
        </div>
    );
}
