import React, { Component } from 'react'
import { Link } from 'react-router'
import BlogStore from '../stores/BlogStore'
import ToAPIActions from '../actions/ToAPIActions'



export default class Layout extends Component {
  constructor() {
    super()
    this.state = {
      blogToEdit: BlogStore.getBlogToEdit()
    }
    this._onChange = this._onChange.bind(this)
    this.editBlog = this.editBlog.bind(this)
   }

   componentWillMount() {
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

  editBlog(e) {
    e.preventDefualt()
    const { name, author, body, date, id } = this.refs
    let editedBlog = {
      name: name.value,
      author: author.value,
      body: body.value,
      date: date.value
      id: id.value
    }
    ToAPIActions.sendEditedBlog(editedBlog)
  }




  render() {


    return (
      <div>
       <form className='addblogForm' onSubmit={this.createNewRoom}>
          <input type="text" ref='name' className="formElement" defaultValue={blogToEdit.name} />
          <input type="text" ref='author' className="formElement" defaultValue={blogToEdit.author} />
          <input type="textArea" ref='body' className="formElement" defaultValue={blogToEdit.body} />
          <input type="text" ref='id' className="formElement" value={blogToEdit.id} />
          <input type="textArea" ref='date' className="formElement" value={blogToEdit.date} />
          <button id={blog._id} type="submit">Submit Room</button>
        </form>
      </div>
    )
  }
}
