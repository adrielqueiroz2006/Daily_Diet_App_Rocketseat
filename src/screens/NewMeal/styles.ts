import styled, { css } from 'styled-components/native'
import { Circle } from 'phosphor-react-native'

type Props = {
  isLarger?: boolean
  isColumn?: boolean
}

type DotProps = {
  type?: 'PRIMARY' | 'SECONDARY'
}

type ButtonProps = {
  isSelected?: 'Default' | 'Healthy' | 'notHealthy'
}

export const AppContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Header = styled.View`
  justify-content: center;
  align-items: center;

  height: 132px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 40px 24px;
  gap: 140px;

  position: relative;
  top: -28px;

  z-index: 2;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const ScreenTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const Form = styled.View`
  flex-direction: column;

  width: 100%;

  gap: 24px;
`

export const InputWrapper = styled.View<Props>`
  flex-grow: 1;

  height: ${({ isLarger }) => (isLarger ? 142 : 70)}px;

  gap: ${({ isColumn }) => (isColumn ? 20 : 4)}px;
  flex-direction: ${({ isColumn }) => (isColumn ? 'row' : 'column')};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const Input = styled.TextInput`
  ${({ theme }) => css`
    flex: 1;

    align-items: center;

    padding: 14px;
    gap: 8px;

    border: 1px;
    border-radius: 6px;
    border-color: ${theme.COLORS.GRAY_500};
  `}
`

export const OptionsWrapper = styled.View`
  gap: 8px;
  flex-direction: column;
`

export const ButtonWrapper = styled.View`
  gap: 8px;
  flex-direction: row;
`

export const Button = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  flex-direction: row;

  box-sizing: border-box;

  gap: 8px;

  justify-content: center;
  align-items: center;

  padding: 16px;

  border: 1px;
  border-radius: 6px;

  border-color: ${({ theme, isSelected }) => {
    switch (isSelected) {
      case 'Healthy':
        return theme.COLORS.GREEN_DARK
      case 'notHealthy':
        return theme.COLORS.RED_DARK
      case 'Default':
        return theme.COLORS.GRAY_600
      default:
        return theme.COLORS.GRAY_600
    }
  }};

  background-color: ${({ theme, isSelected }) => {
    switch (isSelected) {
      case 'Healthy':
        return theme.COLORS.GREEN_LIGHT
      case 'notHealthy':
        return theme.COLORS.RED_LIGHT
      case 'Default':
        return theme.COLORS.GRAY_600
      default:
        return theme.COLORS.GRAY_600
    }
  }};
`

export const DotIcon = styled(Circle).attrs<DotProps>(({ theme, type }) => ({
  size: 8,
  weight: 'fill',
  color: type === 'SECONDARY' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
}))``
