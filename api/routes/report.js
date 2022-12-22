import express from "express"
import { CustomerReportController, IndividualReportController, monthlyReportController, removeEntry } from "../controllers/reportController.js"

const router = express.Router()

// get all the data of that date 
router.post("/dailyReport", CustomerReportController)
router.post("/monthlyReport", monthlyReportController)
router.post("/individualReport", IndividualReportController)
// delete the entry 
router.delete("/:id", removeEntry)



export { router as DailyReportRouter }