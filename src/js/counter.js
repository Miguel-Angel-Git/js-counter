
let numero = 0;

function update() {
    document.getElementById("number").textContent = numero;
}

function leerNumero() {
    let NumeroTemp = document.getElementById("number").textContent;
    numero = parseInt(NumeroTemp) || 0;
}

function add() {
    //Escribir tu código que aumenta
    leerNumero();
    numero++;
    update();
}

function reset() {
    //Escribir tu código que hace un reset a 0
    leerNumero();
    numero = 0;
    update();
}

function decrease() {
    //Escribir tu código que resta
    leerNumero();
    numero--;
    update();
};

export { add, reset, decrease }

