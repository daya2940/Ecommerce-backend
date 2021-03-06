const express = require("express");
const router = express.Router();
const { authCheck, adminCheck } = require("../middleware/auth");
const {
  create,
  read,
  update,
  remove,
  listAll,
} = require("../controller/product");

router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck, update);
router.delete("/product/:slug", authCheck, adminCheck, remove);

module.exports = router;
