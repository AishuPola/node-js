import express from "express";
import { createUserctr } from "../controllers/users.controller.js";
const router = express.Router();

router.post("/signup", createUserctr);
export default router;
