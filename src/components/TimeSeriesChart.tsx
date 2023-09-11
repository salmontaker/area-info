import { useEffect, useState } from 'react'
import {
  ComposedChart,
  Area,
  Bar,
  Cell,
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
import colors from '../styles/constants/colors'

import * as S from './TimeSeriesChart.styled'

function TimeSeriesChart() {
  const [areaData, setAreaData] = useState<AreaData[]>([])
  const { dataService } = useCustomContext(DataContext)

  const [areaId, setAreaId] = useState<string[]>([])
  const [selectedId, setSelectedId] = useState('')

  const toggleId = (id: string) => {
    setSelectedId(selectedId === id ? '' : id)
  }

  useEffect(() => {
    const data = dataService.getData()

    setAreaData(data)
    setAreaId(Array.from(new Set(data.map((item) => item.id))))
  }, [])

  return (
    <>
      <S.ButtonWrapper>
        {areaId.map((id) => (
          <S.Button key={id} $isSelected={id === selectedId} onClick={() => toggleId(id)}>
            {id}
          </S.Button>
        ))}
      </S.ButtonWrapper>
      <ResponsiveContainer height="90%">
        <ComposedChart
          data={areaData}
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
          <Tooltip content={<CustomToolTip />} cursor={false} />
          <Legend />
          <Bar
            barSize={30}
            dataKey="value_bar"
            fill={colors.barColor}
            yAxisId="right"
            onClick={(data: AreaData) => {
              toggleId(data.id)
            }}
          >
            {areaData.map((item, index) => (
              <Cell
                key={index}
                fill={item.id === selectedId ? colors.selectedColor : colors.barColor}
              />
            ))}
          </Bar>
          <Area dataKey="value_area" fill={colors.areaColor} type="monotone" yAxisId="left" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  )
}

export default TimeSeriesChart
