const express = require("express");
const router = express.Router();

const errorRouter = require("./errorRouter");
const landingRouter = require("./landingRouter");
const homeRouter = require("./homeRouter");

router.use(landingRouter);
router.use(homeRouter);
router.use(errorRouter);

module.exports = router;