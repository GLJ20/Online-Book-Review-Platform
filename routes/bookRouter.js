const express = require("express")
const router = express.Router()

const bookController = require("../controllers/bookController.js")

router.post("/", bookController.createBook)
router.post("/addmany", bookController.addMany)
router.get("/", bookController.getAllBooks)
router.get("/:id", bookController.getBookById)
router.put("/:id", bookController.updateBookById)
router.delete("/:id", bookController.deleteBookById)

module.exports = router