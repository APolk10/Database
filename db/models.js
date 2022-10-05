const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  accessLevel: String,
  hours: {
    type: Number,
    default: 40
  }
})

const reviewSchema = new Schema({
  user: String,
  date: {
    type: Date,
    default: new Date()
  },
  workDate: Date,
  body: String,
  title: String,
  img: [String],
  categories: [String],
  city: String,
  state: String,
})

const jobSchema = new Schema({
  title: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  client: String,
  assignedEmployee: {
    type: String,
    default: null
  },
  media: [String],
  description: String,
  categories: [String],
  date: {
    type: Date,
    default: new Date()
  },
  complete: {type: Boolean, default: false},
  notes: [{
    note: String,
    img: [String]
  }]
})

const toolSchema = new Schema({
  category: String,
  tools : [String],
})

module.exports = {
  Users: mongoose.model('Users', userSchema),
  Reviews: mongoose.model('Reviews', reviewSchema),
  Jobs: mongoose.model('Jobs', jobSchema),
  Tools: mongoose.model('Tools', toolSchema)
}
