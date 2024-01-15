import { TouchableOpacityProps } from 'react-native'

import { Icon, Container, ContainerStyleProps, Subtitle, Title } from './styles'

type Props = TouchableOpacityProps & {
  type?: ContainerStyleProps
  onOpenStats: () => void
}

export function Percent({ type = 'PRIMARY', onOpenStats, ...rest }: Props) {
  return (
    <Container type={type} {...rest} onPress={onOpenStats}>
      <Icon type={type} />
      <Title> 90,86%</Title>
      <Subtitle> das refeições dentro da dieta </Subtitle>
    </Container>
  )
}
