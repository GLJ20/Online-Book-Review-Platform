const express = require("express")
const logger = require("morgan")
const methodOverride = require("method-override")
const session = require("express-session")
const path = require('path');
require('dotenv').config()
const MongoStore = require("connect-mongo")

const PORT = process.env.PORT ? process.env.PORT : 5000

const db = require("./db")

const authRouter = require("./routes/authRouter.js")
const userRouter = require("./routes/userRouter.js")
const bookRouter = require("./routes/bookRouter.js")
const reviewRouter = require("./routes/reviewRouter.js")

const app = express()

app.use(express.static('public'))

app.use(logger("dev"))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride("_method"))
app.use(
  session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
  })
})
);

app.use((req, res, next) => {
  res.locals.user = req.session.user
  next()
})


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // or pug, or leave it for static HTML
app.set('views', path.join(__dirname, 'views'));

app.use('/auth', authRouter)

app.use('/users', userRouter)

app.use("/books", bookRouter)

app.use("/reviews", reviewRouter)

app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Running Server on Port ${PORT} . . . `)
  })