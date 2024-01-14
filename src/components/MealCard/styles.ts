import styled, { css } from 'styled-components/native'

export type StatusStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: StatusStyleProps
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  margin-top: 8px;
  padding: 14px 16px 14px 12px;
  gap: 12px;

  border-radius: 6px;

  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;

  margin-left: auto;

  border-radius: 999px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
