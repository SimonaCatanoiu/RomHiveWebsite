import express from 'express'
import { verifyAdmin, verifyUser,verifyUser2 } from '../utils/verifyToken.js'
import { createBooking, getAllBooking, getBooking,getUserBookings } from '../controllers/bookingController.js'

const router = express.Router()

router.post('/',verifyUser2,createBooking)
router.get("/:id",verifyUser,getBooking)
router.get("/all/:id",verifyUser,getUserBookings)
router.get("/",verifyAdmin,getAllBooking)

export default router