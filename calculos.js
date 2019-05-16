let estudiante =
{
    nombre: 'Juan',
    edad: 21,
    notas: {matematicas: 4,
            ingles: 4.3,
            programacion: 4.5
        }
};

let obtenerPromedio = (n1, n2, n3) => ((n1+n2+n3)/3)
module.exports = { estudiante, obtenerPromedio}