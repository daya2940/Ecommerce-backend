import express from "express";
import { user } from "../controller/user.js";
const router = express.Router();

router.get("/user", (req, res) => user);

export default router;
