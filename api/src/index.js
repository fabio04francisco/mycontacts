const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Rota raiz da API MyContacts');
})

app.listen(3000, () => console.log('API started at http://localhost:3000'))