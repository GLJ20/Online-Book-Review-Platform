const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    picture: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User