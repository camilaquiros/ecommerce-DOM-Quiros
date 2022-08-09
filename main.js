const productos = [];

// CONSTRUCTOR DEL PRODUCTO
class Producto {
  constructor(nombre, precio, cantidad, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
  }
}

// LLENANDO EL ARRAY DE PRODUCTOS
productos.push(new Producto("Bases", 15000, 10, "foundations.jpeg"));
productos.push(new Producto("Labiales", 3000, 10, "lipsticks.jpeg"));
productos.push(new Producto("Mascaras", 6000, 10, "mascaras.jpeg"));
productos.push(new Producto("Paletas", 20000, 10, "shadowPallette.jpeg"));
productos.push(new Producto("Brochas", 2500, 10, "brushes.jpeg"));
productos.push(new Producto("Esmaltes", 3000, 10, "nailPolish.jpeg"));

let categorias=document.getElementById("categorias");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="categoria";
    carta.innerHTML=`
        <img src="./assets/${producto.imagen}" alt="${producto.nombre}">
        <p>${producto.nombre}</p>
    `;
    categorias.append(carta);
}

let fecha = document.getElementById("fecha");
fecha.innerText = new Date().toLocaleString();