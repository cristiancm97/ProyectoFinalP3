const { SignalCellularAlt } = require("@mui/icons-material");
const mongoose = require("mongoose");

const clubSchema = mongoose.Schema({
  nombredelclub: {
    type: String,
    required: true,
  },
  nombreyapellido: {
    type: String,
    required: true
  },
  celular: {
    type: Number,
    required: true

  },
  edad: {
    type: Number,
    required: true

  },
  numerodecontactodelclub: {
    type: Number,
    required: true

  },
  numerodecanchas: {
    type: Number,
    required: true

  },
  localidad: {
    type: String,
    required: true

  },
  direccion: {
    type: String,
    required: true

  },
  imagendeperfil: {
    type: String,
    required: true

  },
  correo: {
    type: String,
    required: true

  },
  usuario: {
    type: String,
    required: true

  },
  contraseña: {
    type: String,
    required: true

  }

});

module.exports = mongoose.model('Club', clubSchema);