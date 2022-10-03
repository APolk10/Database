const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  employeeId: Number,
  accessLevel: String,
})

const reviewSchema = new Schema({
  user: String,
  date: Date,
  body: String,
  title: String,
  img: String
})

const jobSchema = new Schema({
  title: String,
  address: String,
  client: String,
  assignedEmployee: String,
  media: String,
  description: String,
  categories: [String],
  date: Date,
  complete: {type: Boolean, default: false}
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
