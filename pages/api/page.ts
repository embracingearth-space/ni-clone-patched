// pages/api/page.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id as string

    if (!id) {
        return res.status(400).json({ error: 'Missing Notion page ID' })
    }

    try {
        const recordMap = await notion.getPage(id)
        res.status(200).json({ recordMap })
    } catch (err) {
        console.error('❌ Notion fetch error:', err)
        res.status(500).json({ error: 'Failed to fetch Notion page' })
    }
}
