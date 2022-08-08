const { Schema, model } = require('mongoose');

const UsuarioLinkedinSchema = Schema({
    fullname: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true,
        unique: true
    }
});


module.exports = model('Usuario', UsuarioLinkedinSchema );

