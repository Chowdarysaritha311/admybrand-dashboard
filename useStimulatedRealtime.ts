import { useEffect, useState } from 'react'
import { generateMockData } from '../constants/mockData'
import { type CampaignData } from '../types'

export function useSimulatedRealtime(initialData: CampaignData[], interval = 5000) {
  const [data, setData] = useState(initialData)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    if (!isLive) return

    const intervalId = setInterval(() => {
      setData(prevData => {
        const updatedData = [...prevData]
        const randomIndex = Math.floor(Math.random() * updatedData.length)
        
        // Simulate metric changes
        updatedData[randomIndex] = {
          ...updatedData[randomIndex],
          clicks: Math.max(0, updatedData[randomIndex].clicks + Math.floor(Math.random() * 50) - 10),
          impressions: Math.max(0, updatedData[randomIndex].impressions + Math.floor(Math.random() * 200) - 50),
          cost: Math.max(0, updatedData[randomIndex].cost + (Math.random() * 20) - 5),
        }

        return updatedData
      })
    }, interval)

    return () => clearInterval(intervalId)
  }, [isLive, interval])

  const toggleLiveUpdates = () => setIsLive(!isLive)

  return { data, isLive, toggleLiveUpdates }
}
