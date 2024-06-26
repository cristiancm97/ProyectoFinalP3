const { SignalCellularAlt } = require("@mui/icons-material");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  correo: {
    type: String,
    required: true
  },
  nombreclub: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);