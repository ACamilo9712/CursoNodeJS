const {estudiante, obtenerPromedio} = require ('./calculos');
const fs = require('fs');

console.log(estudiante.nombre);
console.log("El promedio del estudiante es: "+ obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.programacion,estudiante.notas.ingles));

let {nombre,edad, notas :{matematicas, ingles, programacion}} = estudiante;
console.log("la edad del estudiante es: "+ edad);
console.log("El promedio del estudiante es: "+ obtenerPromedio(matematicas,ingles,programacion));

let generarArchivo = (estudiante) => {
    texto = 'El nombre del parcero es: '+ nombre +'\n'+
            'y el promedio del parcero es: '+ obtenerPromedio(matematicas,ingles,programacion);

    fs.writeFile('Promedio.txt',texto,(err) => {
        if (err) throw (err);
        console.log('Esa chimbada corrio');
    }
    ); 
}

generarArchivo(estudiante);