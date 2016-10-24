import AppDispatcher from '../AppDispatcher'

const ServerActions = {

  receiveAllBlogPosts(allBlogPosts) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_BLOGS',
      payload: { allBlogPosts }
    })
  }

}
export default ServerActions