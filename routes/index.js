import express from 'express'; //importando express
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje
} from '../controllers/paginasController.js';

import { guardarTestimonial } from '../controllers/testimonialesController.js';


const router = express.Router(); //guardo el objeto enrutador para manejar todas las rutas desde mi variable.

//creando ruta para inicio
router.get('/', paginaInicio );

//creando ruta para nosotros
//render para utilizar el render debemos pasarle el archivo que se encuentra en la vista.
router.get('/nosotros', paginaNosotros);

//creando ruta para viajes
router.get('/viajes', paginaViajes);
//creando una ruta comodin para los detalles de los viajes.
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;