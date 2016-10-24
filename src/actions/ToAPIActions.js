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
  },

  getBlogToEdit(id) {
    API.getBlogToEdit(id)
  },

  sendEditedBlog(editedBlog){
    API.sendEditedBlog(editedBlog)
  }
}

export default ToAPIActions