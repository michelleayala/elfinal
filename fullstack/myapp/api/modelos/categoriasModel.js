var categoriasModel = {}
const  mongoose = require('mongoose')
const Schema = mongoose.Schema;

var categoriasSchema = new Schema({
    codigo:String,
    nombre:String,
})

const MyModel = mongoose.model('categorias',categoriasSchema)

categoriasModel.Guardar = function(post,callback){

    const instancia = new MyModel 
    instancia.codigo =  post.codigo;
    instancia.nombre =  post.nombre;
    
    instancia.save((error,creado) =>{
        if(error){
            return callback({state:false,info:error})
        }else{
            return callback({state:true,info:creado})
        }
    })
}
categoriasModel.CargarTodas = function(post,callback){
    
    MyModel.find({},{codigo:1,nombre:1,_id:1},(error,documentos) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,documentos})
        }     
    })
}
categoriasModel.CargarId = function(post,callback){
    
    MyModel.find({_id:post.id},{codigo:1,nombre:1,_id:1},(error,documentos) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,documentos})
        }     
    })
}
categoriasModel.Actualizar = function(post,callback){
    MyModel.findByIdAndUpdate(post.id,{
        codigo:post.codigo,
        nombre:post.nombre
    },(error,modificado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:modificado})
        }    
    })
}
categoriasModel.Eliminar = function(post,callback){
    
    MyModel.findByIdAndDelete(post.id,(error,eliminado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:eliminado})
        }    
    })
}

module.exports.categoriasModel = categoriasModel