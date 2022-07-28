var usuario = require('./api/controladores/registroControllers').usuario
var productos = require('./api/controladores/productosControllers.js').productosController
var categorias = require('./api/controladores/categoriasControllers.js').categoriasController


app.post('/productos/Guardar', function (request, response) {
    productos.Guardar(request, response)
})

app.post('/productos/CargarTodas', function (request, response) {
    productos.CargarTodas(request, response)
})
app.post('/productos/CargarId', function (request, response) {
    productos.CargarId(request, response)
})

app.post('/productos/Actualizar', function (request, response) {
    productos.Actualizar(request, response)
})

app.post('/productos/Eliminar', function (request, response) {
    productos.Eliminar(request, response)
})

const multer = require('multer')

app.post('/subirImagen', function (request, response) {

    var post = {
        ruta: '/imagenes'
    }

    var upload = multer({
        storage: multer.diskStorage({

            destination: function (request, file, callback) {
                callback(null, appRoot + post.ruta)
            },
            filename: function (request, file, callback) {
                callback(null, file.originalname)
            }
        }),
        fileFilter: function (request, file, callback) {
            var ext = path.extname(file.originalname)
            console.log(ext)
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.tif') {
                return callback({ state: false, mensaje: 'Solo soporta imagenes' }, null)
            }
            callback(null, true)
        }
    }).single('userFile')

    upload(request, response, function (err) {
        if (err) {
            console.log(err),
            response.json(err)
        }
        else {
            console.log('ok')
            response.json({ state: true, mensaje: 'Archivo Cargado' })
        }
    })


})


app.post('/categorias/Guardar', function (request, response) {
    categorias.Guardar(request, response)
})

app.post('/categorias/CargarTodas', function (request, response) {
    categorias.CargarTodas(request, response)
})
app.post('/categorias/CargarId', function (request, response) {
    categorias.CargarId(request, response)
})

app.post('/categorias/Actualizar', function (request, response) {
    categorias.Actualizar(request, response)
})

app.post('/categorias/Eliminar', function (request, response) {
    categorias.Eliminar(request, response)
})

/*
app.post('/usuarios/Guardar', function (request, response) {
    productos.Guardar(request, response)
})

app.post('/usuarios/CargarTodas', function (request, response) {
    productos.CargarTodas(request, response)
})
app.post('/usuarios/CargarId', function (request, response) {
    productos.CargarId(request, response)
})

app.post('/usuarios/Actualizar', function (request, response) {
    productos.Actualizar(request, response)
})

app.post('/usuarios/Eliminar', function (request, response) {
    productos.Eliminar(request, response)
})
*/

