import { NotionAPI } from 'notion-client'

export default async function handler(req, res) {
  const notion = new NotionAPI()
  const pageId = 'watch-it-1d7e0f65f3b480229e9be26055237592'
  const recordMap = await notion.getPage(pageId)
  res.status(200).json({ recordMap })
}