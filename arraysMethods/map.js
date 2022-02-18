let products = [
    {
        nombre:"cebolla", price:300
    },

    {
        nombre:"papas", price:200
    },
]
const list = document.getElementById("list")
let product = products.map((item)=>{
    list.innerHTML += `<li>${item.nombre} -  ${item.price}</li>`
    
});
console.log(product);