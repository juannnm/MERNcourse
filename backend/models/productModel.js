import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  name: { type: String, requided: true },
  rating : { type: Number, requided: true },
  comment : { type: String, requided: true }
}, {
  timestamps: true
})

const productSchema = mongoose.Schema(
  {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    requird: true
  },
  image: {
    type: String,
    required: true
  },
  brand : {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: Boolean
  },
  reviews:[reviewSchema],
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
    requided: true,
    default: 0
  }
}, {
  timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product