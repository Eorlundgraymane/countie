const express = require("express");
const router = express.Router();
const landingController = require('../controllers/landingController');
const loginController = require("../controllers/loginController");

router.post("/login", loginController.postLoginUser);
router.get("/logout", loginController.getLogoutUser);
router.get("/signup", landingController.getSignUpPage);
router.post("/signup", loginController.postSignupUser);
router.get("/", landingController.getLandingPage);

module.exports = router;