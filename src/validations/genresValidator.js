const {check} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('el nombre es obligatorio'),
    check('ranking')
    .notEmpty()
    .withMessage('el ranking es obligatorio'),
    check('active')
    .notEmpty()
    .withMessage('el active es obligatorio')
]