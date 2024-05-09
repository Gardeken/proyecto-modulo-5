const mongoose = require("mongoose");
const userRouter = require("../controllers/usuarios");

const user = new mongoose.Schema({
  usuario: String,
  contraseña: String,
  telefono: String,
  email: String,
});

//respuesta del usuario en el esquema

//registrar el modelo

const usuario = mongoose.model("User", user);

//exportar

module.exports = usuario;
