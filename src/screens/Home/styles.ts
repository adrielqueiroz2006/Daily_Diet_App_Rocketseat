import { css } from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GREEN_DARK};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
