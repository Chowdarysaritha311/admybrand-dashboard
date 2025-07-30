import { type CampaignData } from '@/lib/types'
import { writeCSV } from 'csv-writer'

export async function exportToCSV(data: CampaignData[], filename: string) {
  const csvWriter = writeCSV({
    path: filename,
    header: [
      { id: 'campaignId', title: 'Campaign ID' },
      { id: 'name', title: 'Campaign Name' },
      { id: 'status', title: 'Status' },
      { id: 'clicks', title: 'Clicks' },
      { id: 'impressions', title: 'Impressions' },
      { id: 'ctr', title: 'CTR' },
      { id: 'cost', title: 'Cost' },
      { id: 'conversions', title: 'Conversions' },
      { id: 'startDate', title: 'Start Date' },
      { id: 'endDate', title: 'End Date' },
    ],
  })

  await csvWriter.writeRecords(data)
}
