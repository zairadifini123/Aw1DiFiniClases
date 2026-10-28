//Importación 1: No nombrada
// import productos from './productos.js'

//Importación 2: Nombrada
import {productosMascotas} from './productos.js' //Con mas de uno: import {productosMascotas, Categorias} from './productos.js'
import {renderizarProductos, filtrarPorTalle} from './funciones.js'

//Busca un elemento por id para diferenciarlo del arbol del DOM
const contenedorProductos = document.getElementById("contenedor-productos") 
const eventoBoton = document.getElementById("evento-boton") 
const dialogo = document.getElementById("dialogo") 
const carro = document.getElementById("carro")

//Arreglo productos
const productosCarrito = []

//Escuchador (Listener) EVENTO-FUNCION (Lo que va a pasar al hacer el evento)
eventoBoton.addEventListener('click', (evento)=>{
    //console.log(evento) Para ver que funcione
    dialogo.showModal()
})

//Filtrar el arreglo de productos
const productosFiltrados =filtrarPorTalle(productosMascotas, 'S')

//1.Renderizar
renderizarProductos(contenedorProductos, productosMascotas, productosFiltrados)

//2. Aplicar escuchadores. 
// Referencia elemento del DOM, conecta javaScript y html, no sirve el id porque es uno solo
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carro')
//const botonesCarro = contenedorProductos.querySelectorAll('[data-id]') Selector de atributo

botonesCarro.forEach((boton)=>{
    boton.addEventListener('click', (evento)=>{
        const idProducto = parseInt (boton.dataset.id)
        console.log(idProducto)
        productosCarrito.push(idProducto)
        console.log(productosCarrito)
        carro.textContent = productosCarritos.lenght
    })

})