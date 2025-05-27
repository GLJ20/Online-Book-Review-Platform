const Book = require("../models/Book.js")
const books = [
    {name: "Pluto Volume 1", author: "Naoki Urasawa", cover: "https://i.imgur.com/wU8qhQr.jpeg", description: "In a distant future where sentient humanoid robots pass for human, someone or some thing is out to destroy the seven great robots of the world.", reviews: []},
    {name: "Pluto Volume 2", author: "Naoki Urasawa", cover: "https://i.imgur.com/JkRteID.jpeg", description: "Volume 2 in the ground-breaking new manga series from award-winning author Naoki Urasawa", reviews: []},
    {name: "Pluto Volume 3", author: "Naoki Urasawa", cover: "https://i.imgur.com/JwBnaZA.jpeg", description: "Volume 3 in the ground-breaking new manga series from award-winning author Naoki Urasawa", reviews: []},
    {name: "Pluto Volume 4", author: "Naoki Urasawa", cover: "https://i.imgur.com/h20QmnT.jpeg", description: "Volume 4 in the ground-breaking new manga series from award-winning author Naoki Urasawa", reviews: []},
    {name: "Pluto Volume 5", author: "Naoki Urasawa", cover: "https://i.imgur.com/OC3v9PF.jpeg", description: "Volume 5 in the ground-breaking new manga series from award-winning author Naoki Urasawa", reviews: []},
    {name: "Pluto Volume 6", author: "Naoki Urasawa", cover: "https://i.imgur.com/MoYvgCw.jpeg", description: "Volume 6 in the ground-breaking new manga series from award-winning author Naoki Urasawa", reviews: []},
    {name: "Pluto Volume 7", author: "Naoki Urasawa", cover: "https://i.imgur.com/PQjcxHB.jpeg", description: "Volume 7 in the ground-breaking new manga series from award-winning author Naoki Urasawa", reviews: []},
    {name: "Pluto Volume 8", author: "Naoki Urasawa", cover: "https://i.imgur.com/oH3mEYz.jpeg", description: "Volume 8 in the ground-breaking new manga series from award-winning author Naoki Urasawa", reviews: []}
]


const addMany = async (req, res) => {
    try {
      const data = await Book.insertMany(books)
      res.send(data)
    } catch (error) {
        console.error("No work", error.message)
    }
}

const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.send(book)
    } catch (error) {
        console.error('An error has occurred creating a recipe!', error.message)
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        res.render('./books/allbooks.ejs', {books})
    } catch (error) {
        console.error('An error has occurred getting all recipes!', error.message)
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('reviews')
        res.render('./books/show.ejs', { book })
    } catch (error) {
        console.error("An error has occured", error.message)
    }
}

const updateBookById = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.send(book)
    } catch (error) {
        console.error("An error has occured", error.message)
    }
}

const deleteBookById = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        res.send(`Book with ID ${req.params.id} ahs been deleted`)
    } catch (error) {
        console.error("error", error.message)
    }
}
module.exports ={
    addMany,
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
}
