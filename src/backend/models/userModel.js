const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true
  },
  fotodeperfil: {
    type: String,
    required: true

  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;