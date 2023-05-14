import express from 'express'
import { createReview } from '../controllers/reviewController.js'
import { verifyUser2 } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:offerId',verifyUser2,createReview)

export default router