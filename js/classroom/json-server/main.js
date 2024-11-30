// utilizando o fetch com then.
// const response = fetch("http://localhost:3333/products")
// .then((response) => response.json())
// .then((data) => console.log(data))

// Utilizando o fetch com async/await

async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

async function fetchProductsById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

// fetchProducts()
//fetchProductsById("1")

// Usando o método post

const Productname = document.getElementById("name")
const Productprice = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit", async (event) => {
    event.preventDefault()

    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: Productname.value,
            price: Productprice.value
        })
    })

})