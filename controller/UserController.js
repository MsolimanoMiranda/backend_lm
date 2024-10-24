import bcrypt from "bcryptjs/dist/bcrypt";
import models from "../models"


export default {
add: async(req, res, next)=>{
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const userCreate = await models.Usuarios.create(req.body);
    res.status(200).send(userCreate);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(error);
}

},
query: async(req, res, next)=>{
  try {
    const usuario = await models.Usuarios.findOne({_id: req.query._id});
    res.status(200).send(usuario);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(error);
}

},
list: async(req, res, next)=>{
  try {
    const usuarios = await models.Usuarios.find({});
    res.status(200).send(usuarios);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(error);
}

},
update: async(req, res, next)=>{
  try {
    const usuarUpdate = await models.Usuarios.findByIdAndUpdate(
      {_id: req.body._id},
      {
        rol:req.body.rol,
        nombre:req.body.nombre,
        tipo_documento:req.body.tipo_documento,
        descripcion:req.body.descripcion,
        num_documento:req.body.num_documento,
        direccion:req.body.direccion,
    });
    res.status(200).send(usuarUpdate);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(error);
}

},
remove: async(req, res, next)=>{

},
activate: async(req, res, next)=>{


},
desactivate: async(req, res, next)=>{

},
login: async(req, res, next)=>{
  try {
    const usuario = await models.Usuarios.findOne({email: req.body.email});
    if(usuario){
      let match = await bcrypt.compare(req.body.password, usuario.password);
      if(match){
        res.json('Password Correcto')
      }else{
        res.status(404).send({
          message:'PASWORD INCORRECTO'
        });
      }
    }else{
      res.status(404).send({
        message:'NO Authorizado'
      });
    }
  } catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(error);
  }


},
}