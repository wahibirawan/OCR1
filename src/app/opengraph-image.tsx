import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'OCR1 - Private Browser-Based OCR';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    // We can load custom fonts here if needed, but system fonts are fine for now
    // or we can fetch a font from Google Fonts. For simplicity/speed, using sans-serif.

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f8fafc', // slate-50 (off-white)
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #e2e8f0 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e2e8f0 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Glass Card Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '40px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.1)',
                        padding: '60px 100px',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    {/* Brand Logo/Text */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                        {/* Icon Mockup */}
                        <div
                            style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.3)',
                                flexDirection: 'column' // Default needed for Satori even if 1 child sometimes
                            }}
                        >
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="5" width="8" height="8" rx="2" fill="white" stroke="none" />
                                <path d="M14 7h6" stroke="white" strokeOpacity="0.8" />
                                <path d="M4 15h16" stroke="white" strokeOpacity="0.8" />
                            </svg>
                        </div>
                        <h1 style={{ display: 'flex', fontSize: '100px', fontWeight: '800', margin: 0, color: '#0f172a', letterSpacing: '-0.05em' }}>
                            OCR<span style={{ color: '#2563eb' }}>1</span>
                        </h1>
                    </div>

                    {/* Tagline */}
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '32px', color: '#64748b', fontWeight: '500', maxWidth: '600px', textAlign: 'center', lineHeight: '1.4' }}>
                        Instant image-to-text conversion.<br />
                        100% Private. browser-based.
                    </div>

                    {/* 'Button' Visual */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '40px',
                            backgroundColor: '#0f172a',
                            color: 'white',
                            padding: '16px 48px',
                            borderRadius: '999px',
                            fontSize: '24px',
                            fontWeight: '600',
                        }}
                    >
                        Try it free
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
