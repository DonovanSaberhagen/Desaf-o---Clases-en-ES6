"use strict";

var _impuesto = require("./dominio/impuesto.js");
var _cliente = require("./dominio/cliente.js");
var imp1 = new _impuesto.Impuesto(1100, 100);
var nuevoCliente = new _cliente.Cliente("lionel Zamorano", imp1);
console.log(nuevoCliente);
console.log(nuevoCliente.calcularImpuesto());