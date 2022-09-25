import express from "express"
import { createInfluencer, getALlInfluencer } from "../controller/influencer.js"

const router=express.Router()

router.post("/",createInfluencer)
router.get("/",getALlInfluencer)

export default router

