import { Cell } from 'recharts'

import { AreaData } from '../service/DataService'
import colors from '../styles/constants/colors'

interface Props {
  areaData: AreaData[]
  selectedId: string
}

function TimeSeriesChartCells({ areaData, selectedId }: Props) {
  return (
    <>
      {areaData.map((item, index) => (
        <Cell key={index} fill={item.id === selectedId ? colors.selectedColor : colors.barColor} />
      ))}
    </>
  )
}

export default TimeSeriesChartCells
