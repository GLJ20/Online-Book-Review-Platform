const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
    {
    name: {type: String, required: true},
    author: {type: String, required: true},
    cover: {type: String, required: true},
    description: {type: String, required: true},
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review"}]
    },
    {timestamps: true}
)

const Book = mongoose.model("Book", bookSchema)

module.exports = Book