import { TooltipProps } from 'recharts'
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent'

import * as S from './CustomTooltip.styled'

function CustomToolTip({ payload }: TooltipProps<ValueType, NameType>) {
  if (payload) {
    return (
      <S.Tooltip>
        <S.TooltipText>id: {payload[0]?.payload.id}</S.TooltipText>
        {payload.map((item, index) => (
          <S.TooltipText key={index} color={item.color}>
            {item.name}: {item.value}
          </S.TooltipText>
        ))}
      </S.Tooltip>
    )
  }

  return null
}

export default CustomToolTip
