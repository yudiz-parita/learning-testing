const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
  sName: { 
    type: String, 
    required: true 
},
  sEmail: { 
    type: String, 
    required: true 
},
}
);

module.exports = mongoose.model('users',User);