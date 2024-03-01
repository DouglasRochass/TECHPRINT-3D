const express = require('express')
const cadastrar = require('../controller/cadastro')
const router = express.Router()

router.post('/', cadastrar.create)

module.exports = router