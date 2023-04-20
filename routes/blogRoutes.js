const express = require('express')
const {addBlog,removeBlog,getAllBlogs,getBlog,getBlogByAuthor} = require('../controllers/blogControllers')
const router = express.Router()

router.post("/addBlog",addBlog)
router.route("/blog/:id").delete(removeBlog).get(getBlog)
router.get("/blogs",getAllBlogs)
router.get('/blog/author/:author_id',getBlogByAuthor)


module.exports = router;