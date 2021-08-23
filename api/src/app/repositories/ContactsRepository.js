const { v4 } = require('uuid');

const db = require('../../database');

let contacts = [
  {
    id: v4(),
    name: 'Fabio',
    email: 'fabio@teste.com',
    phone: '89544454564',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Fabio2',
    email: 'fabio@teste.com',
    phone: '89544454564',
    category_id: v4(),
  },
];

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return rows;
  }

  async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return rows;
  }

  async create(
    name, email, phone, category_id,
  ) {
    const [row] = await db.query(`
      INSERT INTO contacts( name, email, phone, category_id )
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));
      resolve(updateContact);
    });
  }
}

module.exports = new ContactsRepository();
