const jwt = require('jsonwebtoken');
const User = require('../schemas/userSchema')


const authenticate = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log(token)
        if(!token){
            res.status(401).send("no token")
        } else {
            const verifyToken = jwt.verify(token, process.env.JWT_SECRET)
            const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token" : token})
            if(!rootUser){
                res.status(401).send('user not found')
            } else {
                res.status(200).send("authorized user")
            }
        }
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}

module.exports = authenticate;