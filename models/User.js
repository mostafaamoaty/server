const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  address: [{type: String, required: true,}],
  age: { type: String, required: true },
  gender: {type: String, required: true},
  orders: [{ type: mongoose.Types.ObjectId, required: true, ref: "Order" }],
});

userSchema.plugin(uniqueValidator); //to insure user is created before or not

module.exports = mongoose.model("User", userSchema);
