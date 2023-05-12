import express from "express";
import { register,login,changePassword } from "../controllers/authController.js";

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/resetPassword',changePassword)

export default router