const express = require("express")
const categoryController = require("../controllers/categoryControllers")
const router = express.Router()
const {auth, admin} = require("../middleware/auth")


router.post("/api/category", auth, admin, categoryController.createCategory)
router.get("/api/category", categoryController.getCategory)

module.exports = router