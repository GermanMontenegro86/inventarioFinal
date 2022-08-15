let nombres = document.querySelectorAll(".nombres");



class Producto {
    constructor( nombre,precio, stock, vencimiento) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stock;
        this.vencimiento = vencimiento;
    }

    mostrarProducto() {
        let mensaje = `<li>${this.nombre}</li>`
        document.querySelector(".Producto").innerHTML += mensaje;

    }

    mostrarPrecio() {
        let mensaje = `<li>$${this.precio}</li>`
        document.querySelector(".Precio").innerHTML += mensaje;
    }

    mostrarStock() {
        let mensaje = `<li>${this.stock}</li>`
        document.querySelector(".Stock").innerHTML += mensaje;
    }
    mostrarVencimiento() {
        let mensaje = `<li>${this.vencimiento}</li>`
        document.querySelector(".Vencimiento").innerHTML += mensaje;
    }

}

const productos = [];
let nombre = "";
let precio = "";
let stock = "";
let vencimiento = "";

//   para cargar productos
function ingresarNuevoProducto() {
    let confirmar = confirm("desea cargar datos");
    while (confirmar) {

        nombre = prompt("ingrese el nombre");
        precio = parseFloat(prompt("ingrese el precio"));
        while (isNaN(precio)) {
            alert("usar dato numerico");
            precio = parseFloat(prompt("ingrese el precio"));
        }

        stock = prompt("ingrese el stock");
        while (isNaN(stock)) {
            alert("usar dato numerico");
            stock= parseFloat(prompt("ingrese el precio"));
        }
        vencimiento= prompt("ingrese el vencimiento");

        const nuevoProducto = new Producto(nombre,precio, stock, vencimiento);
        productos.push(nuevoProducto);

        confirmar = confirm("desea cargar datos");

    }

    for (Producto of productos) {
        Producto.mostrarProducto();
        Producto.mostrarPrecio();
        Producto.mostrarStock();
        Producto.mostrarVencimiento();

    }

}
// busacar los productos

function buscarProducto() {

    let buscarPorNombre = prompt("buscar nombre");
    buscarPorNombre = productos.find((el) => el.nombre === buscarPorNombre);
    console.log(buscarPorNombre);
}

//   buscar el producto con mator stock

function buscarStock() {

    let buscarStock = +prompt("Escribir cantidad de stock");
    buscarStock = buscarStock = productos.filter((el) => el.stock > buscarStock);
    console.log(buscarStock);

}

//   imprimir todo los productos

function  ImprimirTodo(){
    productos.forEach(element => console.log(element));
}