const User = require('../models/User.js')
const Review = require('../models/Review.js')
const Book = require('../models/Book.js')

const createReview = async (req, res) => {
    try {
        const user = await User.findById(req.body.author)
        const review = await Review.create(req.body)
        const book = await Book.findById(req.body.book)
        user.reviews.push(review._id)
        book.reviews.push(review._id)
        user.save()
        book.save()
        res.send(review)
    } catch (error) {
        console.error('An error has occurred creating a review!', error.message)
    }
} 

const updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.redirect(`/reviews/${review._id}`)
    } catch (error) {
        console.error('An error has occurred updating a review!', error.message)
    }
}

const deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id)
        res.redirect('/reviews')
    } catch (error) {
        console.error('An error has occurred deleting a review!', error.message)
    }
}

module.exports = {
    createReview,
    updateReview,
    deleteReview
}