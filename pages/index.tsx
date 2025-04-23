import React, { useEffect, useState } from 'react'

import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Code = dynamic(() => import('react-notion-x').then((m) => m.Code), { ssr: false })
const Collection = dynamic(() => import('react-notion-x').then((m) => m.Collection), { ssr: false })
const Equation = dynamic(() => import('react-notion-x').then((m) => m.Equation), { ssr: false })
const Modal = dynamic(() => import('react-notion-x').then((m) => m.Modal), { ssr: false })
const Pdf = dynamic(() => import('react-notion-x').then((m) => m.Pdf), { ssr: false })

export default function Home() {
    const [recordMap, setRecordMap] = useState(null)
    const [aiSummary, setAiSummary] = useState('')

    useEffect(() => {
        async function fetchPage() {
            const res = await fetch('/api/notion-page')
            const data = await res.json()
            setRecordMap(data.recordMap)
        }
        fetchPage()
    }, [])

    const summarize = async () => {
        const res = await fetch('/api/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: 'Summarize the current Notion page.' })
        })
        const result = await res.json()
        setAiSummary(result.summary)
    }

    return (
        <>
            <Head>
                <title>Notion AI Workspace</title>
            </Head>

            {/* 🎥 FULLSCREEN YouTube background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/P2MRh6U1qF8?autoplay=1&mute=1&loop=1&playlist=P2MRh6U1qF8&controls=0&modestbranding=1"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title="Background Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    className="w-full h-full object-cover"
                />
            </div>
            

            {/* 🌌 Overlayed content }
            <div className="relative z-10 max-w-5xl mx-auto p-4 text-white bg-black/60 backdrop-blur-md rounded-xl mt-6">
                <div className="flex justify-between items-center py-2">
                    <h1 className="text-xl font-bold">📘 Notion Clone</h1>
                    <button
                        onClick={summarize}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        ✨ AI Summarize
                    </button>
                </div>

                {aiSummary && (
                    <div className="bg-gray-900 text-white p-4 my-4 rounded shadow">
                        <h2 className="font-semibold mb-2">🔎 AI Summary:</h2>
                        <p>{aiSummary}</p>
                    </div>
                )}

                {recordMap ? (
                    <NotionRenderer
                        
                        recordMap={recordMap}
                        fullPage={true}
                        darkMode={true}
                        components={{
                            Code,
                            Collection,
                            Equation,
                            Modal,
                            Pdf,
                            PageLink: ({ href, children }) => (
                                <Link href={`/${href}`}>
                                    <a className="underline hover:text-blue-400">{children}</a>
                                </Link>
                            )
                        }}
                        className="bg-transparent"
                    />
                ) : (
                    <div className="p-6 text-center">Loading Notion page...</div>
                )}
            </div>
            */}
            
        </>
    )
}