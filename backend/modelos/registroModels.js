var sesionesModel = {}
var datos= [];
const mongoose = require('mongoose')
const Schema= mongoose.Schema

//estructura para una coleccion
var UserSchema = new Schema ({
    nombre:String,
    email:String,
    password:String,
    perfil:String
})

//creacion del modelo 
const MyModel = mongoose.model('usuarios',UserSchema)

sesionesModel.registro =function(post,callback){
    const instancia = new MyModel
    instancia.nombre = post.nombre
    instancia.email = post.email
    instancia.password = post.password
    instancia.perfil = 1  

    instancia.save((error,usercreate) =>{

        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }else{
            console.log({state:true,info:usercreate})
        }
    })
}
sesionesModel.buscaremail =function(post,callback){
   var posicion = datos.findIndex((item) => {
    return item.email = post.email
   })
   if(posicion >= 0){
        return  callback(true)
   }
   else{
         return  callback(false)
   }
}

