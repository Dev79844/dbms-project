const express = require('express')
const {registerAuthor,authorLogin} = require('../controllers/authorControllers')
const router = express.Router()

router.route("/register").post(registerAuthor)
router.post("/login",authorLogin)

module.exports = router

