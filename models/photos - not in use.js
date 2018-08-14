const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photosSchema = new Schema({
  image: {
    type: String
  },
  
  date: {
    type: Date,
    default: Date.now
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});


const Photos = mongoose.model("Photos", photosSchema);

module.exports = User;
