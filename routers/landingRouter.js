const express = require("express");
const router = express.Router();
const landingController = require('../controllers/landingController');
const loginController = require("../controllers/loginController");
const homeController = require("../controllers/homeController");

router.post("/login", loginController.postLoginUser,homeController.getHomePage);
router.get("/logout", loginController.getLogoutUser);
router.get("/signup", landingController.getSignUpPage);
router.post("/signup", loginController.postSignupUser);
router.get("/", landingController.getLandingPage);

module.exports = router;