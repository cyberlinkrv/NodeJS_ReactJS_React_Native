const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://dijsilva:Cyberhouse12@reactteste-fxnkx.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete) PUT
//req.body = Acessar corpo da requisição (para criação, edição) POST

app.use(cors()); // Aqui eu permito que qualquer aplicação acesse a minha API
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);