import { Container, Profile } from './styles'

import Logo from '@assets/Logo.svg'
import profilePicture from '@assets/Profile.png'

export function Header() {
  return (
    <Container>
      <Logo />
      <Profile source={profilePicture} />
    </Container>
  )
}
