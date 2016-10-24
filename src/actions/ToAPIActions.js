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

  // getChatroom(roomId) {
  //   API.getSingleChatroom(roomId)
  // },

  sendMessage(message, roomId) {
    API.sendMessage(message, roomId)
  }
}

export default ToAPIActions