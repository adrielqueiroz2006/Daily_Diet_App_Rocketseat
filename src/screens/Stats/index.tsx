import {
  Container,
  InfoWrapper,
  InfoCard,
  Title,
  MealWrapper,
  Number,
  Description,
  Percent,
  PercentNumber,
  PercentDescription,
  ContainerStyleProps,
  Icon,
  Button,
} from './styles'
import { View } from 'react-native'

type Props = {
  type?: ContainerStyleProps
}

export function Stats({ type = 'PRIMARY' }: Props) {
  return (
    <View>
      <Percent type={type}>
        <PercentNumber>90,86%</PercentNumber>
        <PercentDescription>das refeições dentro da dieta</PercentDescription>
        <Button>
          <Icon type={type} />
        </Button>
      </Percent>

      <Container>
        <Title>Estatísticas gerais</Title>
        <InfoWrapper>
          <InfoCard>
            <Number>22</Number>
            <Description>
              melhor sequência de pratos dentro da dieta
            </Description>
          </InfoCard>

          <InfoCard>
            <Number>109</Number>
            <Description>refeições registradas</Description>
          </InfoCard>

          <MealWrapper>
            <InfoCard type="PRIMARY">
              <Number>99</Number>
              <Description>refeições dentro da dieta</Description>
            </InfoCard>

            <InfoCard type="SECONDARY">
              <Number>10</Number>
              <Description>refeições fora da dieta</Description>
            </InfoCard>
          </MealWrapper>
        </InfoWrapper>
      </Container>
    </View>
  )
}
