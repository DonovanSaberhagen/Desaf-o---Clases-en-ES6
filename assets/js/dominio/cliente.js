export class Cliente {
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    //getters

    get nombre() {
        return this._nombre;
    }


    //setters

    set nombre(nuevoCliente){
        this._nombre = nuevoCliente;
    }

    calcularImpuesto(){
        return(this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
    }
}







