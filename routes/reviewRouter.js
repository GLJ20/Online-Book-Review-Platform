const express = require('express')
const router = express.Router()
const Review = require('../models/Review.js')

const reviewController = require('../controllers/reviewController.js')

router.post('/', reviewController.createReview)

router.put('/:id', reviewController.updateReview)
router.delete('/:id', reviewController.deleteReview)
router.get('/:id/edit', async (req, res) => {
  const review = await Review.findById(req.params.id)
res.render('books/editReview', { review })
})

module.exports = router