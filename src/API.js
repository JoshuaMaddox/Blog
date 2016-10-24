import { get, post, put } from 'axios'
import axios from 'axios'
import ServerActions from './actions/ServerActions'
import { browserHistory } from 'react-router'

const API = {
  sendNewBlog(newBlog) {
    post(`/api/blog`, newBlog)
      .then(res => {
        let { data } = res
        console.log(data)
        browserHistory.push('/')
      })
      .catch(console.error)
  },

  getAllBlogPosts() {
    get(`/api/blog`)
      .then(res => {
        let { data } = res
        ServerActions.receiveAllBlogPosts(data)
      })
  },

 deleteBlog(deleteId) {
     axios.delete(`/api/blog/${deleteId}`)
      .then(res => {
        let { data } = res
        console.log(data)
        ServerActions.receiveAllBlogPosts(data)
      })
 },

  // getSingleChatroom(roomId) {
  //   get(`/api/chatrooms/${roomId}`)
  //     .then(res => {
  //       let { data } = res
  //       ServerActions.receiveSingleChatroom(data)
  //     })
  // },

  sendMessage(message, roomId){
    put(`/api/chatrooms/${roomId}`, message)
      .then(res => {
        let { data } = res
        ServerActions.receiveSingleChatroom(data)
      })
  }
}

export default API