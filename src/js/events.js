import { add, reset, decrease } from './counter.js'


//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas
document.getElementById("add").addEventListener("click", add);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("decrease").addEventListener("click", decrease);