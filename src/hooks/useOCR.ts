import { useState, useCallback, useRef } from 'react';
import { createWorker, Worker } from 'tesseract.js';

export interface OCRState {
    status: 'idle' | 'initializing' | 'recognizing' | 'success' | 'error';
    progress: number;
    text: string;
    error: string | null;
}

export function useOCR() {
    const [state, setState] = useState<OCRState>({
        status: 'idle',
        progress: 0,
        text: '',
        error: null,
    });

    const workerRef = useRef<Worker | null>(null);

    const initWorker = useCallback(async () => {
        if (workerRef.current) return workerRef.current;

        setState((prev) => ({ ...prev, status: 'initializing' }));

        try {
            const worker = await createWorker('eng', 1, {
                logger: (m) => {
                    if (m.status === 'recognizing text') {
                        setState((prev) => ({
                            ...prev,
                            progress: Math.round(m.progress * 100),
                        }));
                    }
                },
            });
            workerRef.current = worker;
            return worker;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to initialize OCR engine';
            setState((prev) => ({
                ...prev,
                status: 'error',
                error: errorMessage,
            }));
            return null;
        }
    }, []);

    const recognize = useCallback(async (image: File | string) => {
        setState({
            status: 'recognizing',
            progress: 0,
            text: '',
            error: null,
        });

        try {
            const worker = await initWorker();
            if (!worker) return;

            const { data: { text } } = await worker.recognize(image);

            setState({
                status: 'success',
                progress: 100,
                text,
                error: null,
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to recognize text';
            setState((prev) => ({
                ...prev,
                status: 'error',
                error: errorMessage,
            }));
        }
    }, [initWorker]);

    const clear = useCallback(() => {
        setState({
            status: 'idle',
            progress: 0,
            text: '',
            error: null,
        });
    }, []);

    return {
        ...state,
        recognize,
        clear,
    };
}
