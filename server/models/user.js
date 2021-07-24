const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: {
      type: String, 
      required: true
    },
    hashedPw:{
      type:String, 
      required:true
    },
    verified:{
      type:Boolean,
      required:false
    },
    notes:{
      type:Array,
      required:false
    },
});


const User = mongoose.model("User", UserSchema);

module.exports = User;

