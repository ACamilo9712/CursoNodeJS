let promedio1 = (nota1, nota2, nota3, callback) => {
    setTimeout(function () {
        let resultado = console.log((nota1 + nota2 + nota3) / 3 + "JLECHA");
        callback(resultado);
    }, 5000);
}

promedio1(5, 4, 3, function (resultado) {
    console.log(resultado);
})
