const express = require("express");
const user = require("../controller/user.js");
const router = express.Router();

router.get("/user", (req, res) => user);

module.exports = router;
