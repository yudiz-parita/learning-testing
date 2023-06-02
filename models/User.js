const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
  sName: { 
    type: String, 
    required: true 
},
sEmail: {
  type: String,
  required: true,
  unique: true,
},
}
);
User.statics.createUser = async function (sName, sEmail) {
  if (!this.isValidEmail(sEmail)) {
    throw new Error('Invalid email format');
  }
  const user = new this({ sName, sEmail });
  await user.save();
};


User.statics.isValidEmail = function (sEmail) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(sEmail);
};

User.statics.getAllUsers = async function () {
  return this.find();
};

User.statics.updateUser = async function (userId, newName) {
  const user = await this.findById(userId);
  user.sName = newName;
  await user.save();
};

User.statics.deleteUser = async function (userId) {
  await this.deleteOne({ _id: userId });
};

module.exports = mongoose.model('users',User);