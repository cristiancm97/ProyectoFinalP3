const mongoose = require("mongoose");

const clubSchema = mongoose.Schema({
  nombreClub: String,
  nombreTitular: String,
  nroTitular: String,
  edad: Number,
  nroClub: String,
  localidad: String,
  direccion: String,
  correo: String,
  usuario: String,
  password: String,
  canchas: Number,
  date: {
    type: Date,
    default: Date.now        
  }

});

const Club = mongoose.model('Club', clubSchema);
module.exports = Club;