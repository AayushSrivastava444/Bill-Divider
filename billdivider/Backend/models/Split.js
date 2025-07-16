import mongoose from 'mongoose'

const splitSchema = new mongoose.Schema({
  amount: Number,
  people: Number,
  tipPercent: Number,
  names: [String],
  perPerson: Number,
  date: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Split', splitSchema)
