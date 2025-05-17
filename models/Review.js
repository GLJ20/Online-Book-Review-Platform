const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String, required: true },
        rating: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    },
    { timestamps: true }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review