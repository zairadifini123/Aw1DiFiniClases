//Funciones: Bloque que soluciona un problema específico

//Declaracion (Parametros: a y b)
function suma(a, b){
    //console.log(a+b)
    return a + b //Esto si devuelve un valor, la consola en realidad no
}

//Ejecutar
const resultado = suma(10,2)
console.log(resultado) 

//Funcion flecha
// const resta = (a, b)=>{
//     return a - b
// }

//Forma resumida. Lo que venga despues de la flecha se va a retornar
// const resta = (a,b) => a - b 

// Si hay mas de dos parametros se pone parentesis, si solo es uno no
// const resta = a => a - 5

//Callback: Funcion que se pasa como argumento de otra funcion
const a = (cb)=>{
    console.log('Se ejecuto a')
    cb()
}

const b = ()=>{
    console.log('Se ejecuto el callback b')
}

// console.log(b())
//a(b)

a(()=>{
    console.log('Se ejecuto el callback b')
})

