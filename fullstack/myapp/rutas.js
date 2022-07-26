var usuario = require('./api/controladores/registroControllers').usuario
var productos = require('./api/controladores/productosControllers.js').productosController
var categorias = require('./api/controladores/categoriasControllers.js').categoriasController
var registro = require('./api/controladores/registroControllers.js').registroController
var carro = require('./api/controladores/carroControllers.js').carroControllers

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
var nombreArchivo = ""

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
                nombreArchivo = file.originalname
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
            response.json({ state: true, mensaje: 'Archivo Cargado' , nombre:nombreArchivo})

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


app.post('/registro/Guardar', function (request, response) {
    registro.Guardar(request, response)
})

app.post('/registro/CargarTodas', function (request, response) {
    registro.CargarTodas(request, response)
})
app.post('/registro/CargarId', function (request, response) {
    registro.CargarId(request, response)
})

app.post('/registro/Actualizar', function (request, response) {
    registro.Actualizar(request, response)
})

app.post('/registro/Eliminar', function (request, response) {
    registro.Eliminar(request, response)
})

app.post('/registro/Iniciar', function (request, response) {
    registro.Iniciar(request, response)
})