import  Express  from "express";
import { getBook } from "../controller/book.controller.js";

const router = Express.Router()
router.get("/",getBook)

export default router