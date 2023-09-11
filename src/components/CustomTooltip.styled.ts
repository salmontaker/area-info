import styled from 'styled-components'

export const Tooltip = styled.div`
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 12px;
  padding: 12px;
`

export const TooltipText = styled.div<{ color?: string }>`
  padding: 2px;
  color: ${(props) => props.color || ''};
`
