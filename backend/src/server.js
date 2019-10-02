const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
//Get, Post, Put, Delete

//req.query = Acessar query params(p/ filtros)
//req.params = Acessar route params(p/ edição, delete)
//req.body = Acessar o corpo da requisição

mongoose.connect('mongodb+srv://oministack:JZBgHYRD8w51by11@oministack-dd5zb.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.listen(3333);