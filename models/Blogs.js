const mongoose = require('mongoose'),
      moment = require('moment')

const blogsSchema = new mongoose.Schema({
  name: String,
  author: String,
  date: String,
  body: String,
  id: String
})

const Blogs = mongoose.model('Blogs', blogsSchema)

module.exports = Blogs



