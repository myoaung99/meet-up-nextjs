const mongoose = require("mongoose");
const { Schema } = mongoose;

const meetupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.meetup || new mongoose.model("meetup", meetupSchema);
