const User = require('../models/User.js')

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('reviews')
    // Returns the full user object, including their hashed password. Never send this to anyone other than the user it belongs to.
    const data = {
      _id: user._id,
      name: user.name,
      picture: user.picture,
      reviews: user.reviews
    }
    // Notice you have left out sensitive info like the user's email and hashed password.
    res.render('./users/profile.ejs', { user })
    // This will be an EJS page later...
  } catch (error) {
    console.error('An error has occurred finding a user!', error.message)
  }
}

module.exports = {
  getUserById
}