const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not fauld' });
    }

    response.json(contact);
  }

  store() {
    // cria um contato
  }

  update() {
    // edit um contato
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not fauld' });
    }

    await ContactsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ContactController();
