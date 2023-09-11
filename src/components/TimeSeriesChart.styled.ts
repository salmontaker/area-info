import styled from 'styled-components'

import colors from '../styles/constants/colors'
import { flex } from '../styles/constants/flex'

export const ButtonWrapper = styled.div`
  ${flex.flexCenter}
  margin-top: 12px;
  gap: 12px;
`

export const Button = styled.button<{ $isSelected: boolean }>`
  border: 2px solid lightgray;
  border-color: ${({ $isSelected }) => ($isSelected ? colors.selectedColor : '')};
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
`
