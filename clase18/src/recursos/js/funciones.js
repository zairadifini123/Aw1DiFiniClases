import {productosMascotas} from "./productos.js";

function renderizarProductos(contenedorProductos, productosMascotas) {
    let productosHTML = ""; // Variable vacia para almacenar el HTML generado

    //Recorre cada producto en el arreglo productosMascotas y genera el HTML correspondiente para cada uno, concatenándolo a la variable productosHTML
    productosMascotas.forEach((producto) => {
        //Variable que almacena el HTML generado para cada producto, se incrementa para que almacene el proximo producto y no se sobreescriba
        // Se utiliza la sintaxis de template literals para guardar el valor especifico de cada producto en el HTML generado
        productosHTML += ` 
            <article class="producto">
                <h3>${producto.nombre}</h3> 

                <picture>
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </picture>

                <p>${producto.descripcion}</p>

                <ul>
                    <li>Talle: ${producto.talles[0]}</li>
                    <li>Precio: $${producto.precio}</li>
                </ul>

                <button>Agregar al carrito</button>
            </article>
        `;
    });

    contenedorProductos.innerHTML = productosHTML
    return productosHTML; // Retorna el HTML generado para todos los productos
}

//Forma 1
// function filtrarPorTalle(arreglo, talle ){
//     //Retornar un arreglo filtrado y crea un nuevo arreglo (.filter)
//     return arreglo.filter((producto)=>{
//         const talles = producto.talles.filter((talleEncontrado)=>{
//             return talleEncontrado === talle
//         })
//         return talles.length > 0
//     })
// } 

//Forma 2: indexof
// function filtrarPorTalle(arreglo, talle ){
//     //Retornar un arreglo filtrado y crea un nuevo arreglo (.filter)
    
// } 

//Forma 3: Includes
function filtrarPorTalle(arreglo, talle ){
    const arregloFiltrado = arreglo.filter((producto)=>{
        //Debe ser v o f
        return producto.talles.includes(talle.toUpperCase())
    })
    return arregloFiltrado
} 
export {renderizarProductos, filtrarPorTalle}