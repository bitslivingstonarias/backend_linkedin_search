/*
Rutas

hots + /api/auth
*/

const router = require('express').Router();
const { check } = require('express-validator');
const { CreateUser } = require('../controllers/create_user');
const { ViewUser } = require('../controllers/view_user');
const { validarCampos }  = require('../middlewares/validate-fields');


router.post(
    '/new',
    [ //middlewares
        check('fullname', 'El nombre es obligatorio').not().isEmpty(),
        check('description', 'La descripcion es obligatoria').not().isEmpty(),
        check('url', 'La url es obligatoria').not().isEmpty(),
        check('fullname', 'El nombre debe de ser de 6 caracteres').isLength({ min: 6 }),
        check('description', 'La descripcion debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos,
    ],
    CreateUser );

router.get('/user', ViewUser );

module.exports = router;