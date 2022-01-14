var mongoose = require("mongoose");

if (process.env.NODE_ENV === 'development') {

        var mongoDB = process.env.MONGODB_URI_DEV;
        console.log('DEVELOPMENT ENVIROREMENT');
} else {

        var mongoDB = process.env.MONGODB_URI_PROD;
        console.log('PRODUCTION ENVIROREMENT');

}



mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Fallo conexion BD!!'));
db.once('open', ()=>{

        console.log("Conectado");
});