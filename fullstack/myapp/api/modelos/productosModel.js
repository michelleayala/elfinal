var productosModel = {}
const  mongoose = require('mongoose')
const Schema = mongoose.Schema;

var productosSchema = new Schema({
    codigo:String,
    nombre:String,
    descripcion:String,
    precio:String,
    cantidad:Number,
    vrdescuento:String,
    nuevo:String,
    destacado:String,
    mas_vendidos:String
})

const MyModel = mongoose.model('productos',productosSchema)

productosModel.Guardar = function(post,callback){

    const instancia = new MyModel 
    instancia.codigo =  post.codigo;
    instancia.nombre =  post.nombre;
    instancia.descripcion =  post.descripcion;
    instancia.precio =  post.precio;
    instancia.cantidad =  post.cantidad;
    instancia.vrdescuento =  post.vrdescuento;
    instancia.nuevo =  post.nuevo;
    instancia.destacado =  post.destacado;
    instancia.mas_vendido =  post.mas_vendido;

    instancia.save((error,cread) =>{
        if(error){
            return callback({state:false,info:error})
        }else{
            return callback({state:true,info:creado})
        }
    })
}
productosModel.CargarTodas = function(post,callback){
    
    MyModel.find({},{codigo:1,nombre:1,precio:1,cantidad:1,vrdescuento:1,nuevo:1,descatado:1,mas_vendido:1,_id:1},(error,documetos) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:documentos})
        }     
    })
}
productosModel.Actualizar = function(post,callback){
    MyModel.findByIdAndUpdate(post.id,{
        codigo:post.codigo,
        nombre:post.nombre,
        descripcion:post.descripcion,
        precio:post.precio,
        cantidad:post.codigo,
        vrdescuento:post.vrdescuento,
        nuevo:post.nuevo,
        destacado:post.destacado,
        mas_vendido:post.mas_vendido,
    },(error,modificado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:modificado})
        }    
    })
}
productosModel.Eliminar = function(post,callback){
    
    MyModel.findByIdAndDelete(post.id,(error,eliminado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,info:eliminado})
        }    
    })
}

module.exports.productosModel = productosModel