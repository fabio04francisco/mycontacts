import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import formatPhone from '../../utils/formatPhone';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();

        setContacts(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contatos' : ' contatos'}
        </strong>

        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arow" />
          </button>
        </header>
      </ListContainer>

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="infor">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name
                && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{formatPhone(contact.phone)}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
