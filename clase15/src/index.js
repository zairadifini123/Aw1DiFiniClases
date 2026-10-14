//Estructura de control de bucle

// for(let i = 0; i<10; i++ )
// {
//     console.log(i)
// }

//Arreglos
// const numeros = [1,2,3,4,5,[1,1]]
// const numeros2 = [1,2,3,4,5,6]

// console.log(numeros[5][1][0])
// numeros[2] = 5

// for(let i=0; i < numeros.length;i++)
// {
//     console.log(numeros[i])
// }

//Objetos: Estructura de datos con par, clave y valor
const persona = {
    //Propiedad:valor
    edad: 20,
    estudia: true,
    nombre: "Juan",
    redes: [
        'instagram',
        'tiktok',
        'youtube'
    ],
    otros: {
        pasatiempo: 'Pintar',
        mascotas: 2
    },
    caminar: function name(params){

    }
}

console.log(persona.edad)
console.log(persona.redes[1]) //Muestra tiktok dentro de redes
persona.nacionalidad = 'Argentina' //Añade una propiedad
console.log(persona.otros.pasatiempo)