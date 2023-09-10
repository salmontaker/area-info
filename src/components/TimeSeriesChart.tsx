import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

import { DataContext } from '../context/DataContext'
import { useCustomContext } from '../hooks/useCustomContext'

interface ConvertedData {
  timestamp: string
  id: string
  value_area: number
  value_bar: number
}

function TimeSeriesChart() {
  const [data, setData] = useState<ConvertedData[]>([])
  const { dataService } = useCustomContext(DataContext)

  useEffect(() => {
    const convertedData = Object.entries(dataService.getData()).map(
      ([timestamp, { id, value_area, value_bar }]) => ({
        timestamp,
        id,
        value_area,
        value_bar,
      })
    )
    setData(convertedData)
  }, [])

  return (
    <>
      <ReactApexChart
        width={'100%'}
        height={'90%'}
        options={{
          chart: { type: 'line' },
          labels: data.map((item) => item.timestamp),
          xaxis: {
            type: 'datetime',
          },
          yaxis: [
            {
              title: {
                text: 'Area',
              },
            },
            {
              opposite: true,
              title: {
                text: 'Bar',
              },
            },
          ],
        }}
        series={[
          { name: 'Area', type: 'column', data: data.map((item) => item.value_area) },
          { name: 'Bar', type: 'column', data: data.map((item) => item.value_bar) },
        ]}
      />
    </>
  )
}

export default TimeSeriesChart
