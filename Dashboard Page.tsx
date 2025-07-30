import { Suspense } from 'react'
import { MetricCards, MetricsSkeleton } from '@/components/dashboard/MetricCard'
import { ChartsSection, ChartsSkeleton } from '@/components/dashboard/charts'
import { DataTableSection, TableSkeleton } from '@/components/dashboard/DataTable'
import { RealTimeUpdater } from '@/components/dashboard/RealTimeUpdater'
import { FilterControls } from '@/components/dashboard/filters'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <RealTimeUpdater />
      <FilterControls />
      
      <Suspense fallback={<MetricsSkeleton />}>
        <MetricCards />
      </Suspense>

      <Suspense fallback={<ChartsSkeleton />}>
        <ChartsSection />
      </Suspense>

      <Suspense fallback={<TableSkeleton />}>
        <DataTableSection />
      </Suspense>
    </div>
  )
}
