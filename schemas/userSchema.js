const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    }, 
        tokens : [
            {
            token : {
                type:String,
                required:true
            }
        }
        ]
    
}, {
    timestamps:true
})

//Hashing password to secure
UserSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password, 10)
    }
    next()
})

//generated tokens to verify user
UserSchema.methods.generateToken = async function()  {
    try {
        let generatedToken = jwt.sign({_id:this._id}, process.env.JWT_SECRET)
        this.tokens = this.tokens.concat({token:generatedToken})
        await this.save()
        return generatedToken;
    
    } catch (error) {
          console.log(error)   
     }
 
}

const User = mongoose.model('user', UserSchema)

module.exports = User