import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function Home() {
  return (
    <>
      <PageHeader
        title="Editar Contato"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
