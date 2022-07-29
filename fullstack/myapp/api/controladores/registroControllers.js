var registroModel = require('../modelos/registroModels.js').registroModel
var registroController ={}


registroController.Guardar = function(request,response){
        var post ={
            nombre:request.body.nombre,
            apellido:request.body.apellido,
            usuario:request.body.usuario,
            password:request.body.password,
            email:request.body.email,
            telefono:request.body.telefono,
            perfil:request.body.perfil,

        }
        if (post.nombre == '' || post.nombre == undefined || post.nombre == null ){
            response.json({state:false,mensaje:'el campo del nombre es obligatorio'})
            return false
        } 
        if (post.apellido == '' || post.apellido == undefined || post.apellido == null ){
            response.json({state:false,mensaje:'el campo del apellido es obligatorio'})
            return false
        } 
        if (post.password == '' || post.password == undefined || post.password == null ){
            response.json({state:false,mensaje:'el campo de la password es obligatorio'})
            return false
        } 
        if (post.email == '' || post.email == undefined || post.email == null ){
            response.json({state:false,mensaje:'el campo del email es obligatorio'})
            return false
        } 
        if (post.telefono == '' || post.telefono == undefined || post.telefono == null ){
            response.json({state:false,mensaje:'el campo de la telefono es obligatorio'})
            return false
        } 
        if (post.perfil == '' || post.perfil == undefined || post.perfil == null ){
            response.json({state:false,mensaje:'el campo de la perfil es obligatorio'})
            return false
        } 
        registroModel.Guardar(post,function(respuesta){
            if(respuesta.state == true){
                response.json({state:true,mensaje:'Usuario ha sido Creado'})
            }
            else{
                response.json({state:true,mensaje:'Se Presento un error al Crear el usuario', info:respuesta.info})
            }
        })
}
registroController.CargarTodas = function(request,response){
    var post = {
    }
    registroModel.CargarTodas(post,function(respuesta){
        response.json(respuesta)
    })
}
registroController.CargarId = function(request,response){
    var post = {
        id:request.body.id
    }

    if (post.id == '' || post.id == undefined || post.id == null ){
        response.json({state:false,mensaje:'el campo del id es obligatorio'})
        return false
    } 

    registroModel.CargarId(post,function(respuesta){
        response.json(respuesta)
    })
}
registroController.Actualizar = function(request,response){
    var post ={
        id:request.body.id,
        nombre:request.body.nombre,
        apellido:request.body.apellido,
        usuario:request.body.usuario,
        password:request.body.password,
        email:request.body.email,
        telefono:request.body.telefono,
        perfil:request.body.perfil,

    }
    if (post.id == '' || post.id == undefined || post.id == null ){
        response.json({state:false,mensaje:'el campo del id es obligatorio'})
        return false
    } 
    if (post.nombre == '' || post.nombre == undefined || post.nombre == null ){
        response.json({state:false,mensaje:'el campo del nombre es obligatorio'})
        return false
    } 
    if (post.apellido == '' || post.apellido == undefined || post.apellido == null ){
        response.json({state:false,mensaje:'el campo del apellido es obligatorio'})
        return false
    } 
    if (post.password == '' || post.password == undefined || post.password == null ){
        response.json({state:false,mensaje:'el campo de la password es obligatorio'})
        return false
    } 
    if (post.email == '' || post.email == undefined || post.email == null ){
        response.json({state:false,mensaje:'el campo del email es obligatorio'})
        return false
    } 
    if (post.telefono == '' || post.telefono == undefined || post.telefono == null ){
        response.json({state:false,mensaje:'el campo de la telefono es obligatorio'})
        return false
    } 
    if (post.perfil == '' || post.perfil == undefined || post.perfil == null ){
        response.json({state:false,mensaje:'el campo de la perfil es obligatorio'})
        return false
    } 
    registroModel.Actualizar(post,function(respuesta){
        if(respuesta.state == false){
            response.json({state:false,mensaje:'No se pudo Actualizar este usuario'})
        }
        else {
            response.json({state:true,mensaje:'Se Actualizo Correctamente'})
        }
    })
}
registroController.Eliminar = function(request,response){
    var post ={
        id:request.body.id,
        nombre:request.body.nombre,
        apellido:request.body.apellido,
        usuario:request.body.usuario,
        password:request.body.password,
        email:request.body.email,
        telefono:request.body.telefono,
        perfil:request.body.perfil,

    }
    if (post.id == '' || post.id == undefined || post.id == null ){
        response.json({state:false,mensaje:'el campo del id es obligatorio'})
        return false
    } 
    registroModel.Eliminar(post,function(respuesta){
        if(respuesta.state == false){
            response.json({state:false,mensaje:'No se pudo Eliminar este usuario'})
        }
        else {
            response.json({state:true,mensaje:'Se Elimino Correctamente'})
        }
    })
}
module.exports.registroController= registroController