import { ButtonIcon } from '@components/ButtonIcon'
import { useNavigation } from '@react-navigation/native'

import {
  AppContainer,
  Button,
  ButtonWrapper,
  Container,
  DotIcon,
  Form,
  Header,
  Input,
  InputWrapper,
  OptionsWrapper,
  ScreenTitle,
  Title,
} from './styles'
import { useState } from 'react'

export function NewMeal() {
  const [selectedOption, setSelectedOption] = useState('')

  const navigation = useNavigation()

  type OptionProps = 'Healthy' | 'notHealthy'

  function handleBackHome() {
    navigation.navigate('home')
  }

  function handleSelect(option: OptionProps) {
    setSelectedOption(option)
  }

  return (
    <AppContainer>
      <Header>
        <ScreenTitle>Nova refeição</ScreenTitle>
      </Header>
      <Container>
        <Form>
          <InputWrapper>
            <Title>Nome</Title>
            <Input />
          </InputWrapper>

          <InputWrapper isLarger>
            <Title>Descrição</Title>
            <Input />
          </InputWrapper>

          <InputWrapper isColumn>
            <InputWrapper>
              <Title>Data</Title>
              <Input />
            </InputWrapper>

            <InputWrapper>
              <Title>Hora</Title>
              <Input />
            </InputWrapper>
          </InputWrapper>

          <OptionsWrapper>
            <Title>Está dentro da dieta?</Title>

            <ButtonWrapper>
              <Button
                isSelected={
                  selectedOption === 'Healthy' ? 'Healthy' : 'Default'
                }
                onPress={() => handleSelect('Healthy')}
              >
                <DotIcon />
                <Title>Sim</Title>
              </Button>

              <Button
                isSelected={
                  selectedOption === 'notHealthy' ? 'notHealthy' : 'Default'
                }
                onPress={() => handleSelect('notHealthy')}
              >
                <DotIcon type="SECONDARY" />
                <Title>Não</Title>
              </Button>
            </ButtonWrapper>
          </OptionsWrapper>
        </Form>

        <ButtonIcon title="Cadastrar refeição" onNavigate={handleBackHome} />
      </Container>
    </AppContainer>
  )
}
