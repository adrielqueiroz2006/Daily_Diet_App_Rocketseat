import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { ArrowUpRight } from 'phosphor-react-native'

export type ContainerStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ContainerStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;

  margin-bottom: 40px;
  padding: 20px 16px;

  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;

  top: 8px;
  right: 8px;
`

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
