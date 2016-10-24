const express = require('express'),
      router = express.Router(),
      Blogs = require('../models/Blogs'),
      BlogPosts = require('../models/BlogPosts')

router.route('/')
  .get((req, res) => {
    Blogs.find({})
      .then(blogs => {
        res.send(blogs)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  .post((req, res) => {
    Blogs.create(req.body)
      .then(blogs => {
        res.send(blogs)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

router.route('/:id')
  .get((req, res) => {
    Blogs.findById(req.params.id)
      .then(blog => {
        res.send(blog)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  .delete((req, res) => {
    Blogs.findByIdAndRemove(req.params.id)
      .then(blogs => {
        console.log('blogs: ', blogs)
        res.send(blogs)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  .put((req, res) => {
    Blogs.findById(req.params.id)
      .then(blog => {
        blog.blogPosts.unshift(req.body)
        return blog.save()
      })
      .then(savedBlog=> {
        res.send(savedBlog)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  // .put((req, res) => {
  //   Chatroom.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
  //     .then(updatedChatroom => {
  //       res.send(updatedChatroom)
  //     })
  //     .catch(err => {
  //       res.status(400).send(err)
  //     })
  //     // .then(Chatroom.findById(req.params.id))
  //     // .then(chatroom => {
  //     //   return chatroom.save()
  //     // })
  // })



// router.route('/')
//   .get((req, res) => {
//     Client.findAll()
//       .then(clients => {
//         res.send(clients)
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       })
//   })
//   .post((req, res) => {
//     Client.create(req.body)
//     .then(Client.findAll)
//     .then(clients => {
//       res.send(clients)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
//   })


// router.route('/client')
//  .get((req, res) => {
//     Client.findSingleClient(req.query.email)
//       .then(clients => {
//         res.send(clients)
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       })
//   })
//  .put((req, res) => {
//     Client.editClient(req.body)
//       .then(Client.findAll)
//       .then(clients => {
//         res.send(clients)
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       })
//  })

//  router.route('/:id')
//   .get((req, res) => {
//     let id = req.params.id
//     Client.getClientById(id)
//     .then(client => {
//       res.send(client)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
//   })
//   .delete((req, res) => {
//     let id = req.params.id
//     Client.deleteClient(id)
//     .then(Client.findAll)
//     .then(clients => {
//       res.send(clients)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
//   })

module.exports = router