const mongoose = require("mongoose");

const connectMongoose = async () => mongoose.connect(process.env.MONGODB_URI);

export default connectMongoose;
