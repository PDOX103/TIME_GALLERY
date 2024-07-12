const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/UserSignUp")
const userSignInController = require("../controller/UserSignIn")

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);


module.exports = router;