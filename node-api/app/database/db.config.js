const dotenv = require('dotenv')
dotenv.config('.production.env') 
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env
module.exports = {
       mongo_url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    // mongo_url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
}