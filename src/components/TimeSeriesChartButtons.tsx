import * as S from './TimeSeriesChart.styled'

interface Props {
  areaId: string[]
  selectedId: string
  toggleId: (id: string) => void
}

function TimeSeriesChartButtons({ areaId, selectedId, toggleId }: Props) {
  return (
    <>
      {areaId.map((id) => (
        <S.Button key={id} $isSelected={id === selectedId} onClick={() => toggleId(id)}>
          {id}
        </S.Button>
      ))}
    </>
  )
}

export default TimeSeriesChartButtons
