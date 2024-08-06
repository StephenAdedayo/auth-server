const User = require('../model/userModel')


const register = async (req, res) => {
    const {firstName, lastName, email, phone, password} = req.body

  
    const alreadyExists = await User.findOne({email})

    if(alreadyExists){
        res.status(400).json({error: 'user already exists'})
    }

    try {
        const user = await User.create({firstName, lastName, email, phone, password})
        if(user){
            res.status(201).json({message: 'user registered successfully'})
        }
    } catch (error) {
        res.status(500).json({error: 'incorrect user data'})
    }

}

module.exports = {register}