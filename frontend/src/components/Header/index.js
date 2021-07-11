import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/image/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo MyContacts" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

    </Container>
  );
}
