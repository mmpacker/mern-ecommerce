import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: { type: String, requied: true},
  rating: { type: Number, requied: true},
  comment: { type: String, requied: true},
}, {
  timestamps: true,
})

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
}, {
  timestamps: true
})

const User = mongoose.model('Product', productSchema)

export default Product