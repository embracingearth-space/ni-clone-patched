// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import YouTubeBackground from '../components/YouTubeBackground'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Notion Visualizer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <YouTubeBackground />
            <Component {...pageProps} />
        </>
    )
}