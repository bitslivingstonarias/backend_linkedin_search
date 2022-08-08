const { response } = require('express');
const Users = require('../models/Users');


const ViewUser = async(req, res = response) =>{

    const user = await Users.find().sort({$natural:-1}).limit(1);

    res.json({
        "ok": true,
        msg: 'tarjeta',
        fullname: user[0].fullname,
        description: user[0].description,
        url: user[0].url
    })
}

module.exports = {
    ViewUser
};