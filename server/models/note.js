const mongoose = require('mongoose');

// const PRIORITY = {
//     VERY_HIGH,
//     HIGH,
//     MID,
//     LOW,
//     VERY_LOW,
// }

// const STATE = {
//     FINISHED,
//     STARTED,
//     ON_HOLD,
//     NOT_STARTED,
// }


const NoteSchema = new mongoose.Schema({
    title: {
      type: String,
    },
    description:{
      type:String,
    },
    // priority:{
    //     type:Number,
    // },
    // complexity:{
    //     type:Number,
    // },
    // state:{
    //     type:Number,
    // },
});


const Note = mongoose.model("Note", UserSchema);

module.exports = Note;

