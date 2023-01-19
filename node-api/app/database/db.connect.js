const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const {mongo_url} = require('./db.config')

const connctToMongoDB = async () => {
    const options = {
            useUnifiedTopology:true,
            useNewUrlParser: true,
    }
    try {
        const conn = await mongoose.connect(mongo_url,options)
        console.log(`mongo database is connected! ${conn.connection.host} `)

    }catch(error){
         console.error(`Error: ${error} failed to connect `)
         process.exit(1) 
    }
}

module.exports = connctToMongoDB