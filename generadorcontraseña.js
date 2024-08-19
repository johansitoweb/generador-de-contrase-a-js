function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz';
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
    let conjuntoCaracteres = caracteres;

    if (incluirMayusculas) conjuntoCaracteres += mayusculas;
    if (incluirNumeros) conjuntoCaracteres += numeros;
    if (incluirSimbolos) conjuntoCaracteres += simbolos;

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * conjuntoCaracteres.length);
        contrasena += conjuntoCaracteres[indiceAleatorio];
    }
    return contrasena;
}

console.log(generarContrasena(12, true, true, true));
