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
      .catch(console.error)
  },

 deleteBlog(deleteId) {
    axios.delete(`/api/blog/${deleteId}`)
      .then(res => {
        let { data } = res
        console.log(data)
        ServerActions.receiveAllBlogPosts(data)
      })
      .catch(console.error)
 },

 getBlogToEdit(id) {
  get(`/api/blog/${id}`)
  .then(res => {
      let { data } = res
      console.log(data)
      browserHistory.push('/blog/edit')
    })
    .catch(console.error)
 },

 sendEditedBlog(editedBlog) {
  put(`/api/blog/${editedBlog}`)
    .then(res => {
      let { data } = res
      console.log(data)
      browserHistory.push('/')
    })
    .catch(console.error)
 }
}

export default API