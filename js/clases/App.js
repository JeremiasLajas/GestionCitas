import {datosCita, nuevaCita} from '../funciones'

import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from '../selectores.js'

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
       
        // Eventos
            mascotaInput.addEventListener('change', datosCita);
            propietarioInput.addEventListener('change', datosCita);
            telefonoInput.addEventListener('change', datosCita);
            fechaInput.addEventListener('change', datosCita);
            horaInput.addEventListener('change', datosCita);
            sintomasInput.addEventListener('change', datosCita);
        
            // Formulario para nuevas citasç
            formulario.addEventListener('submit', nuevaCita);

    }
}