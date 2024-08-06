const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

  firstName : {
    type : String,
    required:true,
  },

  lastName:{
   type:String,
   required:true
  },

  email:{
    type:String,
    required:true,
    unique:true

  },

  phone:{
    type:Number,
    required:true
  },

  password:{
    type:String,
    required:true
  }


})


userSchema.pre('save', async (next) => {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});


module.exports = mongoose.model('User', userSchema)