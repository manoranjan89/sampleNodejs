const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()


const app = express()
const connctToMongoDB = require('./app/database/db.connect')
connctToMongoDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api',require('./app/routes/User.route'))

app.get('/',(req,res)=>{
    res.json({
        msg: "App is healthy"
    })
})
const PORT =process.env.NODE_DOCKER_PORT
app.listen(PORT,()=>console.log(`server is up and running on http://127.0.0.1:${PORT}`))


