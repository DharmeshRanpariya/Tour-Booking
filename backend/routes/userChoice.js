import express from 'express'
import {createUserChoice, getAllUserChoice, deleteChoice} from "../controllers/UserChoiceController.js";

const router = express.Router()

router.post('/', createUserChoice)
router.get('/', getAllUserChoice)
router.delete("/:id" , deleteChoice )

export default router
