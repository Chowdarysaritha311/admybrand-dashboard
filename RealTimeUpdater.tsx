'use client'

import { Button } from '@/components/ui/button'
import { useSimulatedRealtime } from '@/lib/hooks/useSimulatedRealtime'
import { RefreshCw } from 'lucide-react'
import { useEffect } from 'react'

export function RealTimeUpdater() {
  const { isLive, toggleLiveUpdates } = useSimulatedRealtime([])

  useEffect(() => {
    // Enable live updates by default
    toggleLiveUpdates()
  }, [toggleLiveUpdates])

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        variant={isLive ? 'default' : 'secondary'}
        size="sm"
        onClick={toggleLiveUpdates}
      >
        <RefreshCw className={`mr-2 h-4 w-4 ${isLive ? 'animate-spin' : ''}`} />
        {isLive ? 'Live Updates' : 'Paused'}
      </Button>
    </div>
  )
}
