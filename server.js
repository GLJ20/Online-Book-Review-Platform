const express = require("express")
const logger = require("morgan")
const methodOverride = require("method-override")
const session = require("express-session")
require('dotenv').config()

const PORT = process.env.PORT ? process.env.PORT : 5000

const db = require("./db")

const authRouter = require("./routes/authRouter.js")
const userRouter = require("./routes/userRouter.js")
const bookRouter = require("./routes/bookRouter.js")
// const reviewRouter = require("./routes/reviewRouter.js")

const app = express()

app.use(logger("dev"))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride("_method"))
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}))

app.use('/auth', authRouter)

app.use('/users', userRouter)

app.use("/books", bookRouter)


app.get("/", (req, res) => {
    res.send('Our app is connected . . . ')
  })

app.listen(PORT, () => {
    console.log(`Running Server on Port ${PORT} . . . `)
  })