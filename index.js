const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')




dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,

}).then(() => {
    console.log('mongodb connected')
}).catch((err) => {
    console.log(err)
})


app.use('/api', require('./routes/userRoutes'))


const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
    console.log('server is running on port 5000')
})