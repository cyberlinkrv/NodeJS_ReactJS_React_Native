const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //Aqui eu passo o objeto 
    email: String,
    //senha: String,
    //telefone: String,
});

module.exports = mongoose.model('User',UserSchema);