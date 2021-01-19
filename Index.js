const express = require('express');
require('dotenv').config();

//crear servidor Express
const app =express();

//Acceso al directorio publico
app.use(express.static('Public'));

//rutas
app.use('/api/auth', require('./Routes/auth.js'));

//configuracion del puerto
app.listen(process.env.PORT, ()=>{
 console.log(`Bancked corriendo en el puerto ${process.env.PORT}`);   
})