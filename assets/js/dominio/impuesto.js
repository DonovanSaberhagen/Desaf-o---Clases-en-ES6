export class Impuesto {
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    //getters

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

    //setters

    set montoBrutoAnual(montoBruto) {
        this._montoBrutoAnual = montoBruto;
    }

    //getters


    get deducciones(){
        return this._deducciones;
    }

    //setters

    set deducciones(impuesto){
        this._deducciones = impuesto;
    }
}





