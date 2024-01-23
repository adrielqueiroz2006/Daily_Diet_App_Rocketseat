import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export type ContainerStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type?: ContainerStyleProps
}

export const Percent = styled.View<Props>`
  justify-content: center;

  height: 200px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const PercentNumber = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const PercentDescription = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 54px;
  left: 24px;
`

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``

export const Container = styled.View`
  flex-direction: column;
  align-items: center;

  padding: 33px 24px 261px 24px;
  gap: 23px;

  position: relative;
  top: -33px;

  z-index: 2;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const InfoWrapper = styled.View`
  width: 327px;
  height: 309px;

  gap: 12px;
`

export const Number = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
  text-align: center;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  text-align: center;
`

export const MealWrapper = styled.View`
  flex-direction: row;

  width: 327px;

  gap: 12px;
`

export const InfoCard = styled.View<Props>`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 16px;
  gap: 8px;

  border-radius: 8px;

  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GREEN_LIGHT
      case 'SECONDARY':
        return theme.COLORS.RED_LIGHT
      default:
        return theme.COLORS.GRAY_600
    }
  }};
`
