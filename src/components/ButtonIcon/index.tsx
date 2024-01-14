import { Container, Text } from './styles'
import { Plus } from 'phosphor-react-native'

type Props = {
  title: string
  showIcon?: boolean
}

export function ButtonIcon({ title, showIcon = false }: Props) {
  return (
    <Container>
      {showIcon && <Plus size={18} color="#FFF" />}
      <Text>{title}</Text>
    </Container>
  )
}
