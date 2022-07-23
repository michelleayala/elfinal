var usuario = require('./api/controladores/registroControllers').usuario
var productos = require('./api/controladores/productosControllers.js').productosController

app.post('/usuarios/registro', function(request,response){

})

app.post('/productos/Guardar',function(request,respose){
    productos.Guardar(request,respose)
})

app.post('/productos/CargarTodas',function(request,respose){
    productos.CargarTodas(request,respose)
})

app.post('/productos/Actualizar',function(request,respose){
    productos.Actualizar(request,respose)
})

app.post('/productos/Eliminar',function(request,respose){
    productos.Eliminar(request,respose)
})
