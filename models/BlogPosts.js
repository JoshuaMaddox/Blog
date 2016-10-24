const mongoose = require('mongoose')

const blogPostsSchema = new mongoose.Schema({
  blogs: Array
})

const BlogPosts = mongoose.model('BlogPosts', blogPostsSchema)

module.exports = BlogPosts