const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/UserSignUp")

router.post("/signup", userSignUpController);


module.exports = router;