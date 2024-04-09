import express from 'express'
import { verifyUser } from '../utils/verifyToken.js'
import {createBooking, deletebooking, getAllBooking, getBooking } from '../controllers/bookingController.js'

const router = express.Router()

router.post('/',verifyUser , createBooking)
router.get('/:id' , getBooking)
router.delete('/:id', deletebooking)
// router.get('/',  verifyUser , getAllBooking)
router.get('/', getAllBooking)

export default router