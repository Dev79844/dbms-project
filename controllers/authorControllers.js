const db = require('../config/db')
const bcrypt = require('bcryptjs')

exports.registerAuthor = async(req,res) => {
    try {
        const {id,name,email,password} = req.body 
    // let hashedPass = await bcrypt.hash(password,10)
        db.query('SELECT * FROM author WHERE email = ?', [email], (err,result) => {
            if(result.length !=0){
                res.status(400).send("User already exists!")
                return;
            }else{
                db.query('INSERT INTO author(id,name,email,password) VALUES (?,?,?,?)',[id,name,email,password], (err,result) => {
                    if(err){
                        console.error(err);
                        return;
                    }
                    else{
                        res.status(200).send("Author registered")
                    }
                })
            }
        })
    } catch (error) {
        console.error(error);
    }
}

exports.authorLogin = (req,res) => {
    const {email,password} = req.body 
    db.query('SELECT * FROM author WHERE email = ? AND password = ?',[email,password], (err,result) => {
        if(err){
            console.error(err);
            return;
        }

        if(result){
            res.status(200).send("Author logged in successful")
        }
    })
}



