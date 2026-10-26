//Importación 1: No nombrada
// import productos from './productos.js'

//Importación 2: Nombrada
import {productosMascotas} from './productos.js' //Con mas de uno: import {productosMascotas, Categorias} from './productos.js'
import {renderizarProductos, filtrarPorTalle} from './funciones.js'

//Busca un elemento por id para diferenciarlo del arbol del DOM
const contenedorProductos = document.getElementById("contenedor-productos") 

//Filtrar el arreglo de productos
const productosFiltrados =filtrarPorTalle(productosMascotas, 'S')



renderizarProductos(contenedorProductos, productosMascotas, productosFiltrados)