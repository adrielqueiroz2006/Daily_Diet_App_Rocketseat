import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;

  padding: 16px 24px;
  gap: 12px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`
export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
