import models from "../models"


export default {
add: async(req, res, next)=>{
  try {
    console.log(req.body)
      const reg = await models.Categoria.create(req.body);
      res.status(200).send(reg);
  } catch (error) {
      res.status(500).send({
        message:'Error'
      });
      next(error);
  }

},
query: async(req, res, next)=>{
  try {
    const category = await models.Categoria.findOne({_id: req.query._id});
      if(category){
       return res.status(200).json(reg);
      }
    res.status(404).send({message:'La categoria no existe'});
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(e);
}

},
list: async(req, res, next)=>{
  try {
    const categories = await models.Categoria.find({});
    res.status(200).send(categories);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(e);
}

},
update: async(req, res, next)=>{
  try {
    const update = await models.Categoria.findByIdAndUpdate({_id: req.body._id},{
      nombre:req.body.nombre,
      descripcion:req.body.descripcion
    });
    res.status(200).send(update);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(e);
}

},
remove: async(req, res, next)=>{
  try {
    const deleteReg = await models.Categoria.findByIdAndDelete({_id: req.body._id});
    res.status(200).send(deleteReg);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(e);
}

},
activate: async(req, res, next)=>{
  try {
    const update = await models.Categoria.findByIdAndUpdate({_id: req.body._id},{
      estado:1,
    });
    res.status(200).send(update);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(e);
}

},
desactivate: async(req, res, next)=>{
  try {
    const update = await models.Categoria.findByIdAndUpdate({_id: req.body._id},{
      estado:0,
    });
    res.status(200).send(update);
} catch (error) {
    res.status(500).send({
      message:'Error'
    });
    next(e);
}

},
}