import { useState } from 'react'

import uuid from 'react-native-uuid'

import { Header } from '@components/Header'
import { Percent } from '@components/Percent'
import { SectionList } from 'react-native'
import { ButtonIcon } from '@components/ButtonIcon'
import { MealCard } from '@components/MealCard'

import { Container, HeaderText, Title } from './styles'

export function Home() {
  const [meals, setMeals] = useState([
    {
      date: '13.01.24',
      data: [
        {
          id: uuid.v4(),
          title: 'X-tudo',
          time: '20:00',
          isHealthy: false,
        },
        {
          id: uuid.v4(),
          title: 'Whey protein com leite',
          time: '16:00',
          isHealthy: true,
        },
        {
          id: uuid.v4(),
          title: 'Salada cesar com frango e queijo',
          time: '12:30',
          isHealthy: true,
        },
        {
          id: uuid.v4(),
          title: 'Vitamina de banana com maça',
          time: '09:30',
          isHealthy: true,
        },
      ],
    },
    {
      date: '12.01.24',
      data: [
        {
          id: uuid.v4(),
          title: 'X-tudo',
          time: '20:00',
          isHealthy: false,
        },
        {
          id: uuid.v4(),
          title: 'Whey protein com leite',
          time: '16:00',
          isHealthy: true,
        },
        {
          id: uuid.v4(),
          title: 'Salada cesar com frango e queijo',
          time: '12:30',
          isHealthy: true,
        },
        {
          id: uuid.v4(),
          title: 'Vitamina de banana com maça',
          time: '09:30',
          isHealthy: true,
        },
      ],
    },
  ])

  return (
    <Container>
      <Header />
      <Percent />

      <Title>Refeições</Title>
      <ButtonIcon title="Nova refeição" showIcon={true} />

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id as string}
        renderSectionHeader={({ section: { date } }) => (
          <HeaderText>{date}</HeaderText>
        )}
        renderItem={({ item }) => (
          <MealCard
            time={item.time}
            title={item.title}
            type={item.isHealthy ? 'PRIMARY' : 'SECONDARY'}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
