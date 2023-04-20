const {getCommentsForaBlog,addComment,removeComment} = require('../controllers/commentControllers')
const express = require('express')
const router = express.Router()

router.get("/comment/:blog_id",getCommentsForaBlog)
router.delete("/comment/:id",removeComment)
router.post("/comment",addComment)

module.exports = router