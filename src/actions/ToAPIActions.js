import API from '../API'

const ToAPIActions = {
  sendNewBlog(newBlog) {
    API.sendNewBlog(newBlog)
  },

  getAllBlogPosts() {
    API.getAllBlogPosts()
  },

  deleteBlog(deleteId){
    API.deleteBlog(deleteId)
  }
}

export default ToAPIActions