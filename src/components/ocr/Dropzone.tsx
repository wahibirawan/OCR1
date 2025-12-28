import { useState, useRef, useCallback, useEffect } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface DropzoneProps {
    onFileSelect: (file: File) => void;
    disabled?: boolean;
}

export function Dropzone({ onFileSelect, disabled }: DropzoneProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFile = (file: File) => {
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
        onFileSelect(file);
    };

    const handleCreatePaste = useCallback((e: ClipboardEvent) => {
        if (disabled) return;
        if (e.clipboardData && e.clipboardData.files && e.clipboardData.files[0]) {
            handleFile(e.clipboardData.files[0]);
        }
    }, [disabled]);


    useEffect(() => {
        window.addEventListener('paste', handleCreatePaste);
        return () => window.removeEventListener('paste', handleCreatePaste);
    }, [handleCreatePaste]);


    const clearFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div
            className={cn(
                "relative rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden group min-h-[280px] md:min-h-[400px] flex flex-col",
                "bg-white/80 backdrop-blur-md border border-black/10 shadow-sm transition-shadow hover:shadow-md",
                // Premium Interaction Layers
                isDragging
                    ? "ring-2 ring-primary/50 border-primary/30 bg-primary/5 scale-[1.02]"
                    : "hover:border-primary/40 hover:bg-white/90",

                preview ? "border-transparent" : "",
                disabled && "opacity-60 cursor-not-allowed hover:bg-white/60"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !disabled && fileInputRef.current?.click()}
        >
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                disabled={disabled}
            />

            {
                preview ? (
                    <div className="relative flex-1 flex items-center justify-center p-6">
                        <img
                            src={preview}
                            alt="Preview"
                            className="relative z-10 max-w-full max-h-[360px] object-contain rounded-xl shadow-sm"
                        />
                        <div className="absolute top-4 right-4 z-20">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="h-10 w-10 rounded-full shadow-sm bg-white hover:bg-white/90 text-foreground"
                                onClick={clearFile}
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8 text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-black/[0.03]">
                            <ImageIcon className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground/60" />
                        </div>
                        <h3 className="text-lg md:text-xl font-medium mb-2 text-foreground">Upload image</h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-6 md:mb-8 leading-relaxed">
                            <span className="hidden sm:inline">Drag & drop here, or </span>click to browse.
                        </p>

                        <div className="flex items-center gap-3">
                            <Button variant="outline" className="rounded-full px-6 border-border font-normal text-muted-foreground hover:text-foreground bg-transparent">
                                Select File
                            </Button>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
