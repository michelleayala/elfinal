var categoriasModel = require('../modelos/categoriasModel.js').categoriasModel

var categoriasController = {}

categoriasController.Guardar = function(request,response){
    var post ={
        codigo:request.body.codigo,
        nombre:request.body.nombre,
    }
    if (post.codigo == '' || post.codigo == undefined || post.codigo == null ){
        response.json({state:false,mensaje:'el campo del codigo es obligatorio'})
        return false
    } 
    if (post.nombre == '' || post.nombre == undefined || post.nombre == null ){
        response.json({state:false,mensaje:'el campo del nombre es obligatorio'})
        return false
    } 

    categoriasModel.Guardar(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Su Categoria ha sido Creado'})
        }
        else{
            response.json({state:true,mensaje:'Se Presento un error al Crear la categoria', info:respuesta.info})
        }
    })
}

categoriasController.CargarTodas = function(request,response){
    var post = {
    }
    categoriasModel.CargarTodas(post,function(respuesta){
        response.json(respuesta)
    })
}
categoriasController.CargarId = function(request,response){
    var post = {
        id:request.body.id
    }

    if (post.id == '' || post.id == undefined || post.id == null ){
        response.json({state:false,mensaje:'el campo del id es obligatorio'})
        return false
    } 

    categoriasModel.CargarId(post,function(respuesta){
        response.json(respuesta)
    })
}
categoriasController.Actualizar = function(request,response){
    var post ={
        id:request.body.id,
        codigo:request.body.codigo,
        nombre:request.body.nombre,
    }
    
    if (post.id == '' || post.id == undefined || post.id == null ){
        response.json({state:false,mensaje:'el campo del id es obligatorio'})
        return false
    } 
    if (post.codigo == '' || post.codigo == undefined || post.codigo == null ){
        response.json({state:false,mensaje:'el campo del codigo es obligatorio'})
        return false
    } 
    if (post.nombre == '' || post.nombre == undefined || post.nombre == null ){
        response.json({state:false,mensaje:'el campo del nombre es obligatorio'})
        return false
    } 

    categoriasModel.Actualizar(post,function(respuesta){
        if(respuesta.state == false){
            response.json({state:false,mensaje:'No se pudo Actualizar este Producto'})
        }
        else {
            response.json({state:true,mensaje:'Se Actualizo Correctamente'})
        }
    })
}

categoriasController.Eliminar = function(request,response){
    var post ={
        id:request.body.id,
        codigo:request.body.codigo,
        nombre:request.body.nombre,
    }
    
    if (post.id == '' || post.id == undefined || post.id == null ){
        response.json({state:false,mensaje:'el campo del id es obligatorio'})
        return false
    } 
    categoriasModel.Eliminar(post,function(respuesta){
        if(respuesta.state == false){
            response.json({state:false,mensaje:'No se pudo Eliminar esta categoria'})
        }
        else {
            response.json({state:true,mensaje:'Se Elimino Correctamente'})
        }
    })
}
module.exports.categoriasController = categoriasController