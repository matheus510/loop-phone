import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cellphoneSchema = new Schema({
  model: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  sold: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now()
  },
  updated: {
    type: Date,
    default: Date.now()
  }
})

const model = mongoose.model('cellphone', cellphoneSchema)

export default model