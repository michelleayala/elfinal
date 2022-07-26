var usuario = require('./api/controladores/registroControllers').usuario
var productos = require('./api/controladores/productosControllers.js').productosController

app.post('/usuarios/registro', function(request,response){

})

app.post('/productos/Guardar',function(request,response){
    productos.Guardar(request,response)
})

app.post('/productos/CargarTodas',function(request,response){
    productos.CargarTodas(request,response)
})
app.post('/productos/CargarId',function(request,response){
    productos.CargarId(request,response)
})

app.post('/productos/Actualizar',function(request,response){
    productos.Actualizar(request,response)
})

app.post('/productos/Eliminar',function(request,response){
    productos.Eliminar(request,response)
})
