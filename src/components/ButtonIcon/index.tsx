import { Container, Text } from './styles'
import { Plus } from 'phosphor-react-native'

type Props = {
  title: string
  showIcon?: boolean
  onNavigate: () => void
}

export function ButtonIcon({ title, showIcon = false, onNavigate }: Props) {
  return (
    <Container onPress={onNavigate}>
      {showIcon && <Plus size={18} color="#FFF" />}
      <Text>{title}</Text>
    </Container>
  )
}
