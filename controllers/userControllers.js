const db = require('../config/db')

exports.registerUser = (req,res) => {
    try {
        const {name,email,password} = req.body 
        db.query('insert into user(name,email,password) values (?,?,?)',[name,email,password],(err,result) => {
            if(err){
                console.error(err);
                return;
            }
            res.status(200).send("User registered")
        })
    } catch (error) {
        console.error(error);
    }
}

exports.loginUser = (req,res) =>{
    try {
        const {email,password} = req.body
        db.query('select * from user where email = ? and password = ?',[email,password], (err,result) =>{
            if(err){
                console.error(err);
                return;
            }
            res.status(200).send('User login successful')
        })
    } catch (error) {
        console.error(error);
    }
}

