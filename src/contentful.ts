import { createClient, EntryCollection } from '../node_modules/contentful';

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_CDA_TOKEN

const client = createClient({
  space,
  accessToken,
})

async function fetchEntries(context): Promise<{ data: any, total: number }> {
  const entries: EntryCollection<any> = await client.getEntries(context)

  if (entries.items) {
    return {
      data: entries.items,
      total: entries.total
    }
  }

  return null
}

export { fetchEntries }
