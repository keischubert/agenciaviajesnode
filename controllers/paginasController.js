import { Testimonial } from '../models/Testimonial.js';
import {Viaje} from '../models/Viaje.js'; //importamos viaje para obtener todos los registros de este.

//tendremos un objeto para cada vista.

const paginaInicio = async (req, resp) => {
    
    //almaceno las 2 busquedas en una promesa para que estas busquen sus resultados al mismo tiempo
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {
        const resultado = await Promise.all(promiseDB);

        resp.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
   } catch (error) {
        console.log(error);
   }
}

const paginaNosotros = (req, resp) => {
    resp.render('nosotros', {
        pagina: 'Nosotros'
    }); 
}

const paginaViajes = async (req, resp) => {

    //obtener todos los registros de viajes de la db
    const viajes = await Viaje.findAll();

    resp.render('viajes', {
        pagina: 'Proximos viajes',
        viajes
    });
}

const paginaDetalleViaje = async (req, resp) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: {slug} });

        console.log(viaje)

        resp.render('viaje', {
            pagina: 'Informacion viaje',
            viaje
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = async (req, resp) => {
    const testimoniales = await Testimonial.findAll();
    resp.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}