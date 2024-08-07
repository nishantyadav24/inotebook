
import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title:{
    type:String,
    required:true

  },
  description:{
    type:String,
    required:true,
    unique:true
  },
  tag:{
    type:String,
    default:"General"

  },
  date:{
    type:Data,
    required:Data.now

  }
  

});
module.exports = mongoose.model('user',Uint8ClampedArrayserSchema);