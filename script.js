const carritos = []

const form = document.getElementById("idForm")
const divCarrito = document.getElementById("divCarrito")
const botonCarrito = document.getElementById("botonCarrito")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let comprar = document.getElementById("idCompra").value
    let precio = document.getElementById("idPrecio").value
    let cuotas = document.getElementById("idCuotas").value

    const carrito = new Carrito (comprar, precio, cuotas)
    carritos.push(carrito)
    console.log(carritos)

    form.reset()
})

botonCarrito.addEventListener("click", () => {
    carritos.forEach(carrito => {
        divCarrito.innerHTML += `
    <div class="card" style="width: 18rem; margin: 3px;">
        <div class="card-body">
            <h5 class="card-title">Objeto: ${carrito.comprar}</h5>
            <p class="card-text">Precio: ${carrito.precio}</p>
            <p class="card-text">Cuotas: ${carrito.cuotas}</p>
        </div>
    </div>
        
        `
    })
})


class Carrito {
    constructor(comprar, precio, cuotas) {
        this.comprar = comprar
        this.precio = precio
        this.cuotas = cuotas
    }
}