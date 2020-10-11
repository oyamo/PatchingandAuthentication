const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

// Login user and sign in JWT
router.post('/login', userController.user_login_post)

module.exports = router
