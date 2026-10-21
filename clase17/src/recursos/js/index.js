//Crear una funcion de renderizado. La funcion debe tener 2 parametros
//1 parametro: Para la referencia del contenedor
//2 parametro: Para el arreglo de productos
//Retorno: El string del HTML

//Buscar querySelector y querySelectorAll

//Objetos creados 
const productosMascotas = [
    {
        nombre: "Collar Ajustable de Nylon",
        imagen: "./recursos/imagenes/productos/correa.jpg",
        descripcion: "Resistente collar de nylon con broche de seguridad para perros.",
        talles: ["S", "M", "L"],
        precio: 12.50
    },
    {
        nombre: "Arnés Reflectivo Ergonómico",
        imagen: "https://ejemplo.com/imagenes/arnes-reflectivo.jpg",
        descripcion: "Arnés cómodo con tiras reflectivas para paseos nocturnos seguros.",
        talles: ["S", "M", "L"],
        precio: 24.99
    },
    {
        nombre: "Cama Suave Térmica",
        imagen: "https://ejemplo.com/imagenes/cama-suave.jpg",
        descripcion: "Cama acojinada lavable para el máximo descanso de tu mascota.",
        talles: ["S", "M", "L"],
        precio: 45.00
    },
    {
        nombre: "Capota Impermeable para Lluvia",
        imagen: "https://ejemplo.com/imagenes/capota-lluvia.jpg",
        descripcion: "Chaqueta impermeable ligera que protege a tu perro del agua.",
        talles: ["S", "M", "L"],
        precio: 18.75
    },
    {
        nombre: "Chaleco de Lana Tejido",
        imagen: "https://ejemplo.com/imagenes/chaleco-lana.jpg",
        descripcion: "Abrigo de lana suave y cálido ideal para días fríos.",
        talles: ["S", "M", "L"],
        precio: 15.30
    },
    {
        nombre: "Bozal de Malla Transpirable",
        imagen: "https://ejemplo.com/imagenes/bozal-malla.jpg",
        descripcion: "Bozal de diseño ajustado que permite respirar y beber libremente.",
        talles: ["S", "M", "L"],
        precio: 10.99
    },
    {
        nombre: "Camiseta de Algodón Fresca",
        imagen: "https://ejemplo.com/imagenes/camiseta-algodon.jpg",
        descripcion: "Ropa ligera de algodón con diseños divertidos para uso diario.",
        talles: ["S", "M", "L"],
        precio: 11.20
    },
    {
        nombre: "Zapatos Antideslizantes de Neopreno",
        imagen: "https://ejemplo.com/imagenes/zapatos-neopreno.jpg",
        descripcion: "Botas protectoras para patas contra el calor y pisos resbaladizos.",
        talles: ["S", "M", "L"],
        precio: 22.00
    },
    {
        nombre: "Disfraz Temático de Temporada",
        imagen: "https://ejemplo.com/imagenes/disfraz-tematico.jpg",
        descripcion: "Disfraz cómodo y divertido perfecto para fiestas y fotos especiales.",
        talles: ["S", "M", "L"],
        precio: 29.90
    },
    {
        nombre: "Pañuelo Bandana de Tela",
        imagen: "https://ejemplo.com/imagenes/panuelo-bandana.jpg",
        descripcion: "Accesorio elegante y lavable que se ajusta fácilmente al cuello.",
        talles: ["S", "M", "L"],
        precio: 8.50
    }
];
    
//Busca un elemento por id para diferenciarlo del arbol del DOM
const contenedorProductos = document.getElementById("contenedor-productos") 
//contenedorProductos.textContent = '<h3> producto 1 </h3>' Solo texto
//contenedorProductos.innerHTML = '<h3> producto 1 </h3>' Si aplica elemento html 

// Función de renderizado: Llama a a la función renderizarProductos y le pasa el contenedor (referencia al elemento HTML donde se van a mostrar los productos) y el arreglo (De los productos que querés representar) 
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

    return productosHTML; // Retorna el HTML generado para todos los productos
}

// Ejecuta la funcion renderizarProductos y asigna el HTML generado al contenedorProductos, mostrando así los productos en la página web
contenedorProductos.innerHTML = renderizarProductos(
    contenedorProductos,
    productosMascotas
);