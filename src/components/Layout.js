import React, { Component } from 'react'
import { Link } from 'react-router'
import BlogStore from '../stores/BlogStore'
import ToAPIActions from '../actions/ToAPIActions'



export default class Layout extends Component {
  constructor() {
    super()
    this.state = {
      blogs: BlogStore.getAllBlogs()
    }
    this._onChange = this._onChange.bind(this)
    this.deleteBlog = this.deleteBlog.bind(this)
    this.editBlog = this.editBlog.bind(this)
   }

   componentWillMount() {
    ToAPIActions.getAllBlogPosts()
    BlogStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    BlogStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      blogs: BlogStore.getAllBlogs()
    })
  }

  editBlog() {
    //send info
    //bush to edit location
  }

  deleteBlog(e){
    let deleteId = e.target.id
    ToAPIActions.deleteBlog(deleteId)
    //get id
    //send to api
  }



  render() {

    const { blogs } = this.state
    let showBlogs;

    if(blogs) {
      console.log('blogs: ', blogs)
      showBlogs = blogs.map((blog, i) => {
        return (
          <div className="blogContainer" key={blog.id}>
            <div className="">
              <span>{blog.date } {blog.author}</span>
              <p>{blog.name}</p>
            </div>
            <div>
              {blog.body}
            </div>
            <div>
              <button id={blog._id} className='btn btn-default' onClick={this.deleteBlog}>Delete Blog</button>
              <button id={blog._id} className='btn btn-default' onClick={this.editBlog}>Edit Blog</button>
            </div>
          </div>
        )
      })
    } else {
      showBlogs = <h2>No Blogs Created</h2>
    }

    return (
      <div>
        <div className="navRow">
          <h3 className="brand"><Link to={'/'}>Blog</Link></h3>
          <div className="navBtn">
            <Link to={'blogs/new'}>Write Blogs</Link>
          </div>
        </div>
        <div className="mainImg">
          <div className="backImg">
            <div className="innerDiv">
              <h2 className='bannerText'>Blog</h2>
            </div>
          </div>
        </div>
        <div className="displayRow">
          {showBlogs}
        </div>
      </div>
    )
  }
}
