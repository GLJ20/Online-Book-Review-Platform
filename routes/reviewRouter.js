const express = require('express')
const router = express.Router()
const Review = require('../models/Review.js')

const reviewController = require('../controllers/reviewController.js')

router.post('/', reviewController.createReview)

router.put('/:id', reviewController.updateReview)
router.delete('/:id', reviewController.deleteReview)

module.exports = router