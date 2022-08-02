var carroModel = {}
const  mongoose = require('mongoose')
const Schema = mongoose.Schema;

var carroSchema = new Schema({
    imagenproducto:String,
    nombre:String,
    precio:Number,
    vrdescuento:String,
    cantidad:Number,
    subtotal:Number,
    total:Number,
    nombrecliente:String,
    direccion:String,
    telefono:Number,
})

const MyModel = mongoose.model('Carro',carroSchema)

carroModel.AgregarCarro = function(post,callback){

    const instancia = new MyModel 
    instancia.imagenproducto =  post.imagenproducto;
    instancia.nombre =  post.nombre;
    instancia.precio =  post.precio;
    instancia.cantidad =  post.cantidad;
    instancia.vrdescuento =  post.vrdescuento;
    instancia.subtotal =  post.subtotal;
    instancia.total =  post.total;
    instancia.nombrecliente =  post.nombrecliente;
    instancia.direccion = post.direccion;
    instancia.telefono = post.telefono;

    instancia.save((error,creado) =>{
        if(error){
            return callback({state:false,info:error})
        }else{
            return callback({state:true,info:creado})
        }
    })
}