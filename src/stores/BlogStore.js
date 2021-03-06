import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'


let _allBlogs;
let _blogToEdit



class BlogStore extends EventEmitter {
  constructor(){
    super()
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_BLOGS':
          _allBlogs = action.payload.allBlogPosts
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening(cb){
    this.on('CHANGE', cb)
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb)
  }

  getAllBlogs() {
    return _allBlogs
  }
  
  getBlogToEdit() {
    return _blogToEdit
  }
}

export default new BlogStore