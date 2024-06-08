import { Impuesto } from "./dominio/impuesto.js";
import { Cliente } from "./dominio/cliente.js";

const imp1 = new Impuesto(1100, 100);
const nuevoCliente = new Cliente("lionel Zamorano", imp1);
console.log(nuevoCliente);

console.log(nuevoCliente.calcularImpuesto());



