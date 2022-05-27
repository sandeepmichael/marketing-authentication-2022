const router = require('express').Router()
const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const authenticate = require('../middleware/Auth')




router.post('/register', async(req, res) => {
    try {
        const {name, email, password} = req.body;
        let user = await User.findOne({email})
        if(user){
            return res.status(401).json({message:"user already exista"})
        }
        
      //  const passwordhash = await bcrypt.hash(password, 10)

        user = new User({
            name,
            email,
            password
        })

        await user.save()

        return res.status(200).json({msg:'user created successfully'})





    } catch (error) {
        res.status(500).send({msg:'something went wrong'})
    }
})

router.post('/login', async(req, res) => {
    try { 
        
      const {email, password} = req.body;
      let user = await User.findOne({email})
      //check if user exists
      if(user){
          const isMatch = await bcrypt.compare(password, user.password)
          if(isMatch){
              //generate token which is defined in schema
              const token = await user.generateToken()
              res.cookie('jwt', token, {
                  //expres token in 24hrs
                  expires : new Date(Date.now() + 86400000),
                  httpOnly:true
              })
              res.status(200).send('logged in ')
          } else {
              res.status(400).send('Invalid credentials')
          }
        }
      


    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
   



})

router.get('/logout', async(req, res) => {
    try {
        res.clearCookie('jwt', {path:'/'})
        res.status(200).send('user logged out')
    } catch (error) {
        console.log(error)
    }
})


router.get('/auth', authenticate, (req, res) => {
 

})


module.exports = router;