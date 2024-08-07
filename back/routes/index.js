const express = require('express');
const router = express.Router();

const userSignUpController = require("../controller/UserSignUp");
const userSignInController = require("../controller/UserSignIn");
const authToken = require('../middleware/authToken');
const userDetailsController = require('../controller/userDetails');
const updateUserDetailsController = require('../controller/updateUserDetails');
const userSignOutController = require('../controller/userSignOut');
const refreshTokenController = require('../controller/refreshTokenController');

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.put("/user-details", authToken, updateUserDetailsController);
router.post("/signout", userSignOutController);
router.post("/refresh-token", refreshTokenController);


module.exports = router;
