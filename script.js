let carrito = [];

const botones = document.querySelectorAll(".btn-agregar");
const listaCarrito = document.querySelector("#listaCarrito");
const totalHTML = document.querySelector("#total");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let nombre = boton.dataset.nombre;
        let precio = Number(boton.dataset.precio);

        carrito.push({
            nombre: nombre,
            precio: precio
        });

        mostrarCarrito();
    });

});

/* function mostrarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach(function(producto, indice) {
        total = total + producto.precio;
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>
                <button class="btn-eliminar" data-indice="${indice}">
                    Eliminar
                </button>
            </td>
        `; */

        listaCarrito.appendChild(fila);
    });

    totalHTML.textContent = "$" + total;
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    botonesEliminar.forEach(function(boton) {
        boton.addEventListener("click", function() {
            let indice = Number(boton.dataset.indice);
            carrito.splice(indice, 1);
            mostrarCarrito();
        });

    });

}