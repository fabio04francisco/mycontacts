class ContactController {
  index(request, response) {
    response.send('Start na classe Contact Controller');
  }

  show() {
    // lista um contato
  }

  store() {
    // cria um contato
  }

  update() {
    // edit um contato
  }

  delete() {
    // apaga um contato
  }
}

module.exports = new ContactController();
