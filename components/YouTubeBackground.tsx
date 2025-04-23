// pages/[id].tsx
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import Link from 'next/link'

const Code = dynamic(() => import('react-notion-x').then(m => m.Code), { ssr: false })
const Collection = dynamic(() => import('react-notion-x').then(m => m.Collection), { ssr: false })
const Equation = dynamic(() => import('react-notion-x').then(m => m.Equation), { ssr: false })
const Modal = dynamic(() => import('react-notion-x').then(m => m.Modal), { ssr: false })
const Pdf = dynamic(() => import('react-notion-x').then(m => m.Pdf), { ssr: false })

const customComponents = {
    Code,
    Collection,
    Equation,
    Modal,
    Pdf,
    PageLink: ({ href, children }) => {
        return (
            <Link href={`/${href}`}><a className="underline hover:text-blue-400">{children}</a></Link>
        )
    }
}

export default function NotionPage() {
    const router = useRouter()
    const { id } = router.query
    const [recordMap, setRecordMap] = useState<any>(null)

    useEffect(() => {
        if (!id || typeof id !== 'string') return
        const notionId = id.includes('-') ? id.split('-').pop() : id

        async function fetchPage() {
            try {
                const res = await fetch(`/api/page?id=${notionId}`)
                const data = await res.json()
                setRecordMap(data.recordMap)
            } catch (error) {
                console.error('Failed to fetch Notion page:', error)
            }
        }
        fetchPage()
    }, [id])

    if (!recordMap) return <div className="text-white text-center p-10">Loading page...</div>

    return (
        <>
            <Head>
                <title>Notion Page</title>
            </Head>
            <main className="relative z-10 w-full min-h-screen text-white">
                <div className="max-w-5xl mx-auto p-6">
                    <NotionRenderer
                        recordMap={recordMap}
                        fullPage={false}
                        darkMode={true}
                        components={customComponents}
                        className="bg-transparent"
                    />
                </div>
            </main>
        </>
    )
}