import { Container, Status, StatusStyleProps, Time, Title } from './styles'
import Divider from '@assets/Divider.svg'

type Props = {
  time: string
  title: string
  type?: StatusStyleProps
}

export function MealCard({ time, title, type = 'PRIMARY' }: Props) {
  return (
    <Container>
      <Time>{time}</Time>
      <Divider />
      <Title numberOfLines={1}>{title}</Title>
      <Status type={type} />
    </Container>
  )
}
