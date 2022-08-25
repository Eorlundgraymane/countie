const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const listCountController = require("../controllers/listCountController");

router.get("/home", homeController.getHomePage);
router.post("/add-item", listCountController.postAddItem);
router.post("/create-list", listCountController.postCreateList);

module.exports = router;
