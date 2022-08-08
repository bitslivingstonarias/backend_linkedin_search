const { response } = require('express');
const Users = require('../models/Users');


const CreateUser = async(req, res = response) => {

    const {  url } = req.body;

    try {
        let user = await Users.findOne({ url });

        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese Linkedin'
            });
        }

        user = new Users( req.body );

        await user.save();

        res.status(201).json({
            ok: true,
            msg: 'Usuario Registrado',
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

module.exports = {
    CreateUser
};