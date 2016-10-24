import React, { Component } from 'react'
import moment from 'moment'
import ToAPIActions from '../actions/ToAPIActions'
import uuid from 'uuid'

export default class AddBlog extends Component {
  constructor() {
    super();

    this.createNewRoom = this.createNewRoom.bind(this)
  }

  createNewRoom(e) {
    e.preventDefault()
    const { name, author, blog } = this.refs
    let newBlog = {
      name: name.value,
      author: author.value,
      body: blog.value,
      id: uuid(),
      date: moment().format('lll')
    }  
    ToAPIActions.sendNewBlog(newBlog)
    console.log(newBlog)
  }

  render() {

    return (
      <div className='blogFromContainer'>
        <form className='addblogForm' onSubmit={this.createNewRoom}>
          <input type="text" ref='name' className="formElement" placeholder='Blog Name' />
          <input type="text" ref='author' className="formElement" placeholder="Blog Author" />
          <input type="textArea" ref='blog' className="formElement" placeholder="Write Your Blog Post Here" />
          <button type="submit">Submit Room</button>
        </form>
      </div>
    )
  }
}
