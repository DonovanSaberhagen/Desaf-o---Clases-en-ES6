export class Impuesto {
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(montoBruto) {
        this._montoBrutoAnual = montoBruto;
    }


    get deducciones(){
        return this._deducciones;
    }

    set deducciones(impuesto){
        this._deducciones = impuesto;
    }
}





