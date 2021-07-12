import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>

        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="infor">
          <div className="contact-name">
            <strong>Fábio Francisco</strong>
            <small>intagram</small>
          </div>
          <span>fabinhofrancisco@gmail.com</span>
          <span>(48) 99999-9999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="infor">
          <div className="contact-name">
            <strong>Fábio Francisco</strong>
            <small>intagram</small>
          </div>
          <span>fabinhofrancisco@gmail.com</span>
          <span>(48) 99999-9999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="infor">
          <div className="contact-name">
            <strong>Fábio Francisco</strong>
            <small>intagram</small>
          </div>
          <span>fabinhofrancisco@gmail.com</span>
          <span>(48) 99999-9999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
