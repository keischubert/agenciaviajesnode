//Importacion de express utilizando common js.
//const express = require('express');

//Importacion de express utilizando la sintaxis de JS
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express(); 

//conectar la base de datos
db.authenticate()
    .then( () => console.log('Database conected'))
    .catch( error => console.log(error));

//definir puerto
const port = process.env.PORT || 3000;


//habilitamos pug
app.set('view engine', 'pug');

//creamos un middleware personalizado para almacenar el anio actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    
    next();
} );

//Agregamos un body parser para poder obtener los objetos enviados con el metodo post
app.use(express.urlencoded({extended: true}));

//establecemos la carpeta publica para acceder a los archivos de manera mas facil.
app.use(express.static('public'));

//agregar router a la app
app.use('/', router);

app.listen(port, () => {
    console.log(`The server is running in the port ${port}`);
})