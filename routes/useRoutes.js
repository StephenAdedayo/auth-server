const express = require('express')
const {register} = require('../controllers/userController')
const router = express.Router()

router.post('/user/register', register)

module.exports = router