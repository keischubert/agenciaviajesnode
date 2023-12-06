import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req, res) => {
    //validacion con js
    const {nombre, mensaje, correo} = req.body;
    const errores = [];

    if(nombre.trim() === ''){
        errores.push({Error: 'El nombre es obligatorio'});
    }
    if(correo.trim() === ''){
        errores.push({Error: 'El correo es obligatorio'});
    }
    if(mensaje.trim() === ''){
        errores.push({Error: 'El mensaje no puede estar vacio'});
    }

    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else{
        //almacenarlo en la db
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);            
        }
    }
}

export {
    guardarTestimonial
}