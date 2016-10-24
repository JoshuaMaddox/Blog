import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'
import AddBlog from './components/AddBlog'


render(
  <div className='container text-center'>
    <Router history = { browserHistory }>
      <Route path = '/' component = { Layout }/>
      <Route path = '/blogs/new' component = { AddBlog }/>
    </Router>
  </div>,
  document.getElementById('root')
)