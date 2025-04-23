// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
            {/* ✅ Persistent YouTube background, outside React control */}
            <div id="yt-video-container" className="fixed inset-0 -z-10 overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/P2MRh6U1qF8?autoplay=1&mute=1&loop=1&playlist=P2MRh6U1qF8&controls=0&rel=0&modestbranding=1"
                    title="Background Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full object-cover pointer-events-none"
                />
            </div>

            <Main />
            <NextScript />
            </body>
        </Html>
    )
}