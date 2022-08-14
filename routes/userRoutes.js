import express from "express";
import { addUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers)
router.post("/addUser", addUser)

export default router