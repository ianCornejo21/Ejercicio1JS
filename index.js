const pizza = [
    {
        id: 1,
        ingredientes: "Tomate, Queso, Jamon",
        nombre: "Napolitana",
        precio: 1100
    },
    {
        id: 2,
        ingredientes: "Queso",
        nombre: "Muzzarella",
        precio: 550
    },
    {
        id: 3,
        ingredientes: "Queso, Tomate, albahaca, pimienta",
        nombre: "Capresse",
        precio: 1200
    },
    {
        id: 4,
        ingredientes: "Jamon, Morrones",
        nombre: "Jamon y Morrones",
        precio: 1100
    },
    {
        id: 5,
        ingredientes: "Palmitos",
        nombre: "Palmito",
        precio: 1000
    },
    {
        id: 6,
        ingredientes:"Mozzarella, Gorgonzola, Provolone, Parmesano",
        nombre: "Cuatro Quesos",
        precio: 1400
    }
]

for(let i = 0; pizza[i] !== undefined; i++){
    if(pizza[i].id % 2){
        console.log('La pizza ' + pizza[i].nombre + ' y su valor es de ' + pizza[i].precio)
    }
}

for(let i = 0; pizza[i] !== undefined; i++){
    if(pizza[i].precio < 600){
        console.log('Si tenemos, la pizza de ' + pizza[i].nombre + ' y su valor es de $' + pizza[i].precio)
    }
}


