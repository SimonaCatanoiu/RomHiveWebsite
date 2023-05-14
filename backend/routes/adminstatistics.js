import express from "express";
import { getMonthlyRevenue,getMonthlySales,getMonthlyUsers,getActiveUsers } from "../controllers/admStatisticsController.js";

const router = express.Router()
import { verifyAdmin } from '../utils/verifyToken.js'

router.get('/revenue',verifyAdmin,getMonthlyRevenue)
router.get('/sales',verifyAdmin,getMonthlySales)
router.get('/users',verifyAdmin,getMonthlyUsers)
router.get('/logs',verifyAdmin,getActiveUsers)


export default router