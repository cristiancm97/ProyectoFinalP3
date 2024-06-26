const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema({
  correo: {
    type: String,
    required: true
  },
  nombreclub: {
    type: String,
    required: true
  }
});

const Reserva = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva 