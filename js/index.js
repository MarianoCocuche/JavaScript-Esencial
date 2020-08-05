"use strict"

/* Objetos*/

// Declaracion de objeto Padre
class Vehiculo {
    constructor(marca, modelo, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    }
}

// Declaracion de objeto Hijo1
class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio)
        this.puertas = puertas;
    }

    info(){
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${parseFloat(this.precio).toFixed(2)}}`);
    }

}

// Declaracion de objeto Hijo2
class Moto extends Vehiculo {
    constructor(marca, modelo, precio, cilindrada){
        super(marca, modelo, precio)
        this.cilindrada = cilindrada;
    }

    info(){
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: $${parseFloat(this.precio).toFixed(2)}}`);
    }

}

// Carga de todos los vehiculos solicitados en un arreglo de objetos
const Vehiculos = [new Auto('Peugeot', '206', 200000, '4' ), new Moto ('Honda', 'Titan', 60000, '125c'), new Auto('Peugeot', '208', 250000, '5' ), new Moto ('Yamaha', 'YBR', 80500.50, '160c')]

// Se muestra en pantalla toda la descripcion de cada uno de los vehiculos cargados
for (let i in Vehiculos){
    Vehiculos[i].info();
}

console.log("=============================");

// Ordenamiento de los vehiculos en funcion del precio
for(let i in Vehiculos){
    Vehiculos.sort(function(a,b){
        if(a.precio > b.precio){
        return 1;}

        if(a.precio < b.precio){
        return -1;}

        if(a.precio = b.precio){
        return 0;}
    });
    
    Vehiculos.reverse();
}

console.log("Vehiculo mas caro: ", Vehiculos[0].marca, " ", Vehiculos[0].modelo);
Vehiculos.reverse();
console.log("Vehiculo mas barato: ", Vehiculos[0].marca, " ", Vehiculos[0].modelo);

// Busqueda del vehiculo que inicia con la letra 'Y' en su modelo
for (let i in Vehiculos){
    var resultado = Vehiculos.findIndex(function (a){
        if(a.modelo[0] == "Y")
        return 1;
    })
}

console.log("Vehículo que contiene en el modelo la letra ‘Y’: ",Vehiculos[resultado].marca ," ", Vehiculos[resultado].modelo);

console.log("=============================");

// Muestra en pantalla en orden de mayor a menor, de los vehiculos segun su precio
console.log('Vehiculos ordenados por precio de mayor a menor');
for(let i in Vehiculos){
    Vehiculos.sort(function(a,b){
        if(a.precio > b.precio){
        return 1;}

        if(a.precio < b.precio){
        return -1;}

        if(a.precio = b.precio){
        return 0;}
    });
    Vehiculos.reverse();
    console.log(Vehiculos[i].marca, " ", Vehiculos[i].modelo);
}