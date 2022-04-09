const express = require("express");
const router = express.Router();
const { createOrUpdateUser } = require("../controller/auth");
const { authCheck } = require("../middleware/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
