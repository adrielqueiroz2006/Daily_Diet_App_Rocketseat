import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin: 36px 0;
`

export const Profile = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 40px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`
