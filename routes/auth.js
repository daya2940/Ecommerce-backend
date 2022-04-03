const express = require("express");
const router = express.Router();
const createOrUpdateUser = require("../controller/auth.js");
const authCheck = require("../middleware/auth.js");

router.get("/create-or-update-user", createOrUpdateUser);

module.exports = router;
