import express from 'express'
import { createReview, getAllReview } from '../controllers/reviewController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:tourId',verifyUser , createReview)
router.get('/', getAllReview)

export default router