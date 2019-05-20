

const opciones ={
    id:{
        default:true,
        alias:'i'
    },
    nombre:{
        default:true,
        alias:'n'
    }
}

const argv = require('yargs')
                .command('inscribir','Insertar Alumno',opciones)
                .argv

console.log(argv.id);
console.log(argv.nombre);
console.log(argv);


let Curso =[{
    id : 1,
    nombre: 'Calculo 1',
    duracion: '1 Semestre' ,
    valor :500000
},{
    id:  2,
    nombre: 'Fisica',
    duracion: '1 Trimestre' ,
    valor :440000
},{
    id : 3,
    nombre: 'Programacion WEB',
    duracion: '1 Semestre' ,
    valor :600000
},{
    id : 4,
    nombre: 'Bases de Datos',
    duracion: '1 Semestre' ,
    valor :500000
}]



let estudianteCurso1 = Curso.find( cursoEst => cursoEst.id == 1);
 // puede hacer
let retardo=(callback)=>{
    setTimeout(function () {
        let resultado = console.log("El curso se llama "
        + estudianteCurso1.nombre+" Tiene una duración de "
        +estudianteCurso1.duracion+ " y un valor de "
        +estudianteCurso1.valor);
        callback(resultado);
    }, 2000);
}

retardo(function (resultado) {
    console.log(resultado);
});

let estudianteCurso2 = Curso.find( cursoEst => cursoEst.id == 2);
 // puede hacer
let retardo2=(callback)=>{
    setTimeout(function () {
        let resultado2 = console.log("El curso se llama "
        + estudianteCurso2.nombre+" Tiene una duración de "
        +estudianteCurso2.duracion+ " y un valor de "
        +estudianteCurso2.valor);
        callback(resultado2);
    }, 4000);
}

retardo2(function (resultado2) {
    console.log(resultado2);
});

let estudianteCurso3 = Curso.find( cursoEst => cursoEst.id == 3);
 // puede hacer
let retardo3=(callback)=>{
    setTimeout(function () {
        let resultado3 = console.log("El curso se llama "
        + estudianteCurso3.nombre+" Tiene una duración de "
        +estudianteCurso3.duracion+ " y un valor de "
        +estudianteCurso3.valor);
        callback(resultado3);
    }, 6000);
}

retardo3(function (resultado3) {
    console.log(resultado3);
});

let estudianteCurso4 = Curso.find( cursoEst => cursoEst.id == 4);
 // puede hacer
let retardo4=(callback)=>{
    setTimeout(function () {
        let resultado4 = console.log("El curso se llama "
        + estudianteCurso4.nombre+" Tiene una duración de "
        +estudianteCurso4.duracion+ " y un valor de "
        +estudianteCurso4.valor);
        callback(resultado4);
    }, 8000);
}

retardo4(function (resultado4) {
    console.log(resultado4);
});

