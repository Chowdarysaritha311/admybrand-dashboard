import { faker } from '@faker-js/faker'

export interface CampaignData {
  campaignId: string
  name: string
  status: 'active' | 'paused' | 'ended'
  clicks: number
  impressions: number
  ctr: number
  cost: number
  conversions: number
  startDate: string
  endDate: string
}

export function generateMockData(count = 50): CampaignData[] {
  return Array.from({ length: count }, () => ({
    campaignId: faker.string.uuid(),
    name: faker.commerce.productName(),
    status: faker.helpers.arrayElement(['active', 'paused', 'ended']),
    clicks: faker.number.int({ min: 100, max: 10000 }),
    impressions: faker.number.int({ min: 1000, max: 50000 }),
    ctr: faker.number.float({ min: 0.1, max: 10, precision: 0.1 }),
    cost: faker.number.float({ min: 50, max: 5000, precision: 0.01 }),
    conversions: faker.number.int({ min: 0, max: 500 }),
    startDate: faker.date.past().toISOString(),
    endDate: faker.date.future().toISOString(),
  }))
}

export const MOCK_DATA = generateMockData()
