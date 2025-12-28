import { Copy, Download, Sparkles, Check, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ResultEditorProps {
    text: string;
    isLoading?: boolean;
    progress?: number;
    status?: string;
}

export function ResultEditor({ text, isLoading, progress, status }: ResultEditorProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ocr-result.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const showPlaceholder = !text && !isLoading;

    return (
        <div className="flex flex-col h-full min-h-[400px] rounded-3xl overflow-hidden transition-all duration-500 bg-white/80 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-sm transition-shadow hover:shadow-md hover:border-primary/30">

            {/* Toolbar - Floating/Integrated */}
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    {/* Visual anchor, maybe empty or simple icon */}
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        disabled={!text}
                        className="rounded-full px-4 h-9 text-xs font-medium text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground"
                    >
                        {copied ? <Check className="w-4 h-4 mr-2 text-emerald-600" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? 'Copied' : 'Copy Text'}
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleDownload}
                        disabled={!text}
                        className="rounded-full px-4 h-9 text-xs font-medium text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Save .txt
                    </Button>
                </div>
            </div>

            <div className="relative flex-1 bg-background m-2 mt-0 rounded-2xl shadow-sm border border-black/[0.04]">
                {isLoading ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-[1px] rounded-2xl">
                        <div className="w-full max-w-xs space-y-4 text-center">
                            <div className="relative h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-primary transition-all duration-300 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Analyzing... {Math.round(progress || 0)}%
                            </p>
                        </div>
                    </div>
                ) : null}

                {showPlaceholder ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                            <FileText className="w-8 h-8 text-muted-foreground/40" />
                        </div>
                        <p className="text-base font-medium text-foreground/80">No text content</p>
                        <p className="text-sm text-muted-foreground max-w-[200px] mt-2 leading-relaxed">
                            Extracted text will appear here.
                        </p>
                    </div>
                ) : null}

                <textarea
                    className={cn(
                        "w-full h-full p-8 resize-none bg-transparent focus:outline-none font-sans text-base leading-relaxed text-foreground selection:bg-primary/20",
                        showPlaceholder && "opacity-0"
                    )}
                    value={text}
                    readOnly
                    placeholder="Text will appear here..."
                />
            </div>
        </div>
    );
}
