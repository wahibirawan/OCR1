"use client";

import { useOCR } from '@/hooks/useOCR';
import { Dropzone } from '@/components/ocr/Dropzone';
import { ResultEditor } from '@/components/ocr/ResultEditor';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
    const { text, progress, status, error, recognize } = useOCR();
    const isProcessing = status === 'recognizing' || status === 'initializing';

    const handleFileSelect = async (file: File) => {
        await recognize(file);
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-6xl">

            {/* Hero Content */}
            <div className="text-center space-y-6 mb-16 md:mb-20 mt-8 md:mt-12">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
                    Text recognition, <br className="hidden md:block" />
                    <span className="text-muted-foreground">simplified for everyone.</span>
                </h1>
                <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-normal">
                    Instantly convert images to text. 100% private, processing happens entirely on your device.
                </p>
            </div>

            {/* Main Workspace */}
            <div className="relative">
                <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">

                    {/* Left: Input Module */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2 h-8">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/80">Input Source</h2>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <Dropzone
                                onFileSelect={handleFileSelect}
                                disabled={isProcessing}
                            />
                        </div>
                        {error && (
                            <div className="p-4 rounded-xl bg-destructive/5 text-destructive text-sm font-medium border border-destructive/10 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                                {error}
                            </div>
                        )}
                    </div>

                    {/* Center: Processing Flow */}
                    <div className="hidden lg:flex flex-col items-center justify-center relative px-4">
                        {/* Connection Line */}
                        <div className={cn(
                            "absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent -z-10",
                            isProcessing && "via-primary/50 animate-pulse"
                        )} />

                        {/* Central Status Indicator */}
                        <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 z-10 bg-background shadow-lg border",
                            isProcessing ? "border-primary/50 text-primary shadow-primary/20 scale-110" : "border-border text-muted-foreground/50"
                        )}>
                            {isProcessing ? (
                                <Cpu className="w-5 h-5 animate-spin-slow" />
                            ) : (
                                <ArrowRight className="w-5 h-5" />
                            )}
                        </div>

                        {/* Status Badge */}
                        <div className="absolute -bottom-8 whitespace-nowrap">
                            {isProcessing && (
                                <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-primary animate-in fade-in zoom-in">
                                    <Sparkles className="w-3 h-3" />
                                    Processing {Math.round(progress * 100)}%
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Mobile Divider */}
                    <div className="lg:hidden flex items-center justify-center py-6 text-muted-foreground/30">
                        <ArrowRight className="rotate-90 w-6 h-6" />
                    </div>

                    {/* Right: Output Module */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2 h-8">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/80">Text Output</h2>
                        </div>
                        <div className="flex-1 flex flex-col min-h-[400px]">
                            <ResultEditor
                                text={text}
                                progress={progress}
                                status={status}
                                isLoading={isProcessing}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
