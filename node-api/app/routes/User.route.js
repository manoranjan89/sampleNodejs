const express = require("express")
const router = express.Router()
const User = require('../models/User.model')
router.get('/users', async (req,res) => {
    try{
        const users = await User.find({})
        res.json({users})


    }catch(err){
        const error = new Error(`Unable to fetch users __${err}`)
        res.json({
            msg: error.message,
            success: false
        })
    }
})
router.post('/user/register', async (req,res) => {
    try{
        const {name,email,role} = req.body
        const newuser = await User.create({
            name,
            email,
            role
        })
        res.json({msg:"saved successfully!",user: newuser, operation: 'POST'})


    }catch(err){
        const error = new Error(`Unable to fetch users __${err}`)
        res.json({
            msg: error.message,
            success: false
        })
    }
})
module.exports = router