// pages/[id].tsx
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'
import Link from 'next/link'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

// Lazy load third-party Notion components
const Code = dynamic(() => import('react-notion-x').then(m => m.Code))
const Collection = dynamic(() => import('react-notion-x').then(m => m.Collection))
const Equation = dynamic(() => import('react-notion-x').then(m => m.Equation))
const Modal = dynamic(() => import('react-notion-x').then(m => m.Modal))
const Pdf = dynamic(() => import('react-notion-x').then(m => m.Pdf))

// Custom page link renderer to support Notion-style slugs
const customComponents = {
    Code,
    Collection,
    Equation,
    Modal,
    Pdf,
    PageLink: ({ href, children }) => {
        const id = href.replace(/^.*-/, '') // Strip out slug, keep ID
        return (
            <Link href={`/${href}`}>
                <a className="underline hover:text-blue-400">{children}</a>
            </Link>
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
            } catch (err) {
                console.error('Failed to fetch Notion page:', err)
            }
        }

        fetchPage()
    }, [id])

    return (
        <>
            <Head>
                <title>Notion Page</title>
            </Head>

            <main className="relative z-10 w-full px-0 pt-12 text-white">
                {recordMap ? (
                    <NotionRenderer
                        recordMap={recordMap}
                        fullPage={true}
                        darkMode={true}
                        components={customComponents}
                        className="w-full"
                        showBreadcrumb={true}
                    />
                ) : (
                    <div className="text-center p-10 text-white">Loading...</div>
                )}
            </main>
        </>
    )
}
