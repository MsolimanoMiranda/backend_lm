import mongoose, {Schema} from "mongoose";


const usuariosSchema = new Schema({
  rol: {type: String, maxlength:50, unique: true, required: true},
  nombre: {type: String, maxlength:255},
  tipo_documento: {type: String, default:20},
  num_documento: {type: String, maxlength:20},
  direccion: {type: String, maxlength:70},
  telefono: {type: String, maxlength:20},
  email: {type: String, maxlength:50, unique: true, required: true},
  password: {type: String, maxlength:64},
  estado: {type: Number, default:1},
  updateAt: {type: Date, default: Date.now},
  createAt: {type: Date, default: Date.now},
})

const Usuarios = mongoose.model('usuarios',usuariosSchema)

export default Usuarios;