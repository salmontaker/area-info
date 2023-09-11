import { useEffect, useState } from 'react'
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import CustomToolTip from './CustomTooltip'
import { DataContext } from '../context/DataContext'
import { useCustomContext } from '../hooks/useCustomContext'
import { AreaData } from '../service/DataService'

function TimeSeriesChart() {
  const [data, setData] = useState<AreaData[]>([])
  const { dataService } = useCustomContext(DataContext)

  useEffect(() => {
    setData(dataService.getData())
  }, [])

  return (
    <ResponsiveContainer>
      <ComposedChart
        data={data}
        margin={{
          top: 30,
          right: 50,
          left: 30,
          bottom: 30,
        }}
      >
        <XAxis dataKey="timestamp" tickFormatter={(value: string) => value.split(' ')[1]} />
        <YAxis
          dataKey="value_area"
          domain={[0, 200]}
          label={{ value: 'Area', angle: -90, dx: -20 }}
          yAxisId="left"
        />
        <YAxis
          dataKey="value_bar"
          label={{ value: 'Bar', angle: 90, dx: 40 }}
          orientation="right"
          yAxisId="right"
        />
        <Tooltip content={<CustomToolTip />} />
        <Legend />
        <Bar barSize={30} dataKey="value_bar" fill="#82ca9d" yAxisId="right" />
        <Area dataKey="value_area" fill="#8884d8" type="monotone" yAxisId="left" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default TimeSeriesChart
