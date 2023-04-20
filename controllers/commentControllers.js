const db = require('../config/db')

exports.addComment = (req,res) => {
    try {
        const {content,user_id,blog_id} = req.body 
        db.query('insert into comment(content,user_id,blog_id) values (?,?,?)',[content,user_id,blog_id], (err,result) => {
            if(err){
                console.error(err);
                return;
            }

            res.status(200).json(result)
        })
    } catch (error) {
        console.error(error);
    }
}

exports.removeComment = (req,res) => {
    try {
        const id = req.params.id
        db.query('delete from comment where comment_id = ?',[id],(err,result) => {
            if(err){
                console.error(err);
                return;
            }
            res.status(200).json(result)
        })
    } catch (error) {
        console.error(error);
    }
}

exports.getCommentsForaBlog = (req,res) => {
    try {
        const id = req.params.blog_id
        db.query('select * from comment where blog_id = ?',[id],(err,result) => {
            if(err){
                console.error(err);
                return;
            }
            res.status(200).json(result);
        })
    } catch (error) {
        console.error(error);
    }
}