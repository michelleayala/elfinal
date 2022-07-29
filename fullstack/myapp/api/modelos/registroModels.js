var registroModel = {}
const mongoose = require('mongoose')
const Schema= mongoose.Schema

//estructura para una coleccion
var UserSchema = new Schema ({
    nombre:String,
    apellido:String,
    usuario:String,
    password:String,
    email:String,
    telefono:String,
    perfil:String
})

//creacion del modelo 
const MyModel = mongoose.model('usuarios',UserSchema)

registroModel.Guardar =function(post,callback){
    const instancia = new MyModel
    instancia.nombre = post.nombre
    instancia.apellido = post.apellido
    instancia.usuario = post.usuario
    instancia.password = post.password
    instancia.email = post.email
    instancia.telefono = post.telefono
    instancia.perfil = post.perfil

    instancia.save((error,usercreate) =>{

        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }else{
            console.log({state:true,info:usercreate})
        }
    })
}

registroModel.CargarTodas = function(post,callback){
    
    MyModel.find({},{nombre:1,apellido:1,usuario:1,password:1,email:1,perfil:1,telefono:1,_id:1},(error,documentos) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,documentos})
        }     
    })
}

registroModel.CargarId = function(post,callback){
    
    MyModel.find({_id:post.id},{nombre:1,apellido:1,usuario:1,password:1,email:1,perfil:1,telefono:1,_id:1},(error,documentos) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,documentos})
        }     
    })
}

registroModel.Actualizar = function(post,callback){
    MyModel.findByIdAndUpdate(post.id,{
        nombre:post.nombre,
        apellido:post.apellido,
        usuario:post.usuario,
        password:post.password,
        email:post.email,
        telefono:post.telefono,
        perfil:post.perfil

    },(error,modificado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:modificado})
        }    
    })
}
registroModel.Eliminar = function(post,callback){
    
    MyModel.findByIdAndDelete(post.id,(error,eliminado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:eliminado})
        }    
    })
}

registroModel.iniciarsesion = function(post,callback){

    MyModel.find((error,eliminado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:eliminado})
        }    
    })
}
module.exports.registroModel = registroModel