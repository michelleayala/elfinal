var productosModel = require('../modelos/productosModel.js').productosModel

var productosController = {}

productosController.Guardar = function(request,response){
    var post ={
        codigo:request.body.codigo,
        nombre:request.body.nombre,
        descripcion:request.body.descripcion,
        precio:request.body.precio,
        cantidad:request.body.cantidad,
        vrdescuento:request.body.vrdescuento,
        nuevo:request.body.nuevo,
        destacado:request.body.destacado,
        mas_vendido:request.body.mas_vendido,
    }
    if (post.codigo == '' || post.codigo == undefined || post.codigo == null ){
        response.json({state:false,mensaje:'el campo del codigo es obligatorio'})
        return false
    } 
    if (post.nombre == '' || post.nombre == undefined || post.nombre == null ){
        response.json({state:false,mensaje:'el campo del nombre es obligatorio'})
        return false
    } 
    if (post.descripcion == '' || post.descripcion == undefined || post.descripcion == null ){
        response.json({state:false,mensaje:'el campo de la descripción es obligatorio'})
        return false
    } 
    if (post.precio == '' || post.precio == undefined || post.precio == null ){
        response.json({state:false,mensaje:'el campo del precio es obligatorio'})
        return false
    } 
    if (post.cantidad == '' || post.cantidad == undefined || post.cantidad == null ){
        response.json({state:false,mensaje:'el campo de la cantidad es obligatorio'})
        return false
    } 

    productosModel.Guardar(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Su Producto ha sido Creado'})
        }
        else{
            response.json({state:true,mensaje:'Se Presento un error al Crear el Producto', info:respuesta.info})
        }
    })
}

productosController.CargarTodas = function(request,response){
    var post = {
    }
    productosModel.CargarTodas(post,function(respuesta){
        response.json(respuesta)
    })
}
productosController.CargarId = function(request,response){
    var post = {
        id:request.body.id
    }

    if (post.id == '' || post.id == undefined || post.id == null ){
        response.json({state:false,mensaje:'el campo del id es obligatorio'})
        return false
    } 

    productosModel.CargarId(post,function(respuesta){
        response.json(respuesta)
    })
}
productosController.Actualizar = function(request,response){
    var post ={
        id:request.body.id,
        codigo:request.body.codigo,
        nombre:request.body.nombre,
        descripcion:request.body.descripcion,
        precio:request.body.precio,
        cantidad:request.body.cantidad,
        vrdescuento:request.body.vrdescuento,
        nuevo:request.body.nuevo,
        destacado:request.body.destacado,
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
    if (post.descripcion == '' || post.descripcion == undefined || post.descripcion == null ){
        response.json({state:false,mensaje:'el campo de la descripción es obligatorio'})
        return false
    } 
    if (post.precio == '' || post.precio == undefined || post.precio == null ){
        response.json({state:false,mensaje:'el campo del precio es obligatorio'})
        return false
    } 
    if (post.cantidad == '' || post.cantidad == undefined || post.cantidad == null ){
        response.json({state:false,mensaje:'el campo de la cantidad es obligatorio'})
        return false
    } 
    if (post.vrdescuento == '' || post.vrdescuento == undefined || post.vrdescuento == null ){
        response.json({state:false,mensaje:'el campo de la vrdescuento es obligatorio'})
        return false
    } 
    if (post.nuevo == '' || post.nuevo == undefined || post.nuevo == null ){
        response.json({state:false,mensaje:'el campo de la nuevo es obligatorio'})
        return false
    } 
    if (post.destacado == '' || post.destacado == undefined || post.destacado == null ){
        response.json({state:false,mensaje:'el campo de la destacado es obligatorio'})
        return false
    } 

    productosModel.Actualizar(post,function(respuesta){
        if(respuesta.state == false){
            response.json({state:false,mensaje:'No se pudo Actualizar este Producto'})
        }
        else {
            response.json({state:true,mensaje:'Se Actualizo Correctamente'})
        }
    })
}

productosController.Eliminar = function(request,response){
    var post ={
        id:request.body.id,
        codigo:request.body.codigo,
        nombre:request.body.nombre,
        descripcion:request.body.descripcion,
        precio:request.body.precio,
        cantidad:request.body.cantidad,
        vrdescuento:request.body.vrdescuento,
        nuevo:request.body.nuevo,
        destacado:request.body.destacado,
        mas_vendidos:request.body.mas_vendidos,
    }
    
    if (post.id == '' || post.id == undefined || post.id == null ){
        response.json({state:false,mensaje:'el campo del id es obligatorio'})
        return false
    } 
    productosModel.Eliminar(post,function(respuesta){
        if(respuesta.state == false){
            response.json({state:false,mensaje:'No se pudo Eliminar este Producto'})
        }
        else {
            response.json({state:true,mensaje:'Se Elimino Correctamente'})
        }
    })
}
module.exports.productosController = productosController