//Metodos de arreglos

const numeros = [2,8,12,50]

//ForEach: Loop que recorre al arreglo, no devuelve nada
//Se le tiene que poner un identificador entre ()
//El callback se ejecuta una vez por elemento (4 en este caso porque el array numeros tiene 4 numeros)
numeros.forEach((numero, indice, arreglo)=>{
    console.log(numero, indice, arreglo)
})

//Map: Loop pero devuelve un nuevo arreglo
const numerosIncrementados = numeros.map((numero)=>{
    return numero + 1 
})

console.log(numerosIncrementados)

//Filter (Nuevo arreglo) y Find (Devuelve un valor)