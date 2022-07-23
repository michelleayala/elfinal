var express = require('express')
var bodyparser = require('body-parser');
var config = require('./config.js').config
global.app = express();
const mongoose = require('mongoose');

//cargar archivo de rutas
//var user_route = require('./routes/usuario');

//conexion base de datos
mongoose.connect('mongodb://127.0.0.1:27017/'+ config.db,{useNewUrlParser:true,useUnifiedTopology:true},(err,res)=>{
    if(err){
        console.log(err)
    }else{ 
        console.log('conexion a mongo exitosa')
    }
})

//middlewares
app.use(bodyparser.json()); //support json encoded bodies
app.use(bodyparser.urlencoded({extended:true})); //support encoded bodies


app.use('/',express.static(__dirname + '/dist/myapp'))


app.listen(config.puerto,function(){
    console.log('servidor funcionando por el puerto' + config.puerto)
})

require('./rutas.js')
 
//exportar modulo
module.exports = app;