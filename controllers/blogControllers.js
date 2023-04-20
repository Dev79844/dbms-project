const db = require('../config/db')

exports.addBlog = (req,res) => { 
    const {title,content,author} = req.body

    // db.query('SELECT * FROM author where author = ?',[author], (err,result) => {
    //     // if(result == 0){
    //     //     res.send("Author not registered");
    //     //     return;
    //     // }

    //     if(err){
    //         console.error(err);
    //         return;
    //     }
    // })

    
    db.query('INSERT INTO blog(title,content,author) VALUES (?,?,?)', [title,content,author], (err,result) => {
        if(err){
            // console.log("hit");
            console.error(err);
            return;
        }
        res.status(200).json(result)
        // res.status(200).send("Blog added")
    })
}

exports.removeBlog = async(req,res) => {
    const id = req.params.id
    db.query('DELETE FROM blog WHERE id = ?',[id], (err,result) => {
        if(err){
            console.error(err);
            return;
        }
        res.status(200).send("Blog deleted")
    })
}

exports.getAllBlogs = (req,res) => {
    try {
        db.query('select * from blog',(err,result) => {
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

exports.getBlog = (req,res) => {
    try {
        const id = req.params.id
        db.query('select * from blog where id = ?',[id],(err,result) =>{
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

exports.getBlogByAuthor = (req,res) => {
    try {
        const author = req.params.author_id
        
        db.query('select * from blog where author = ?',[author],(err,result) => {
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
