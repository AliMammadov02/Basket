
const products = [

    {
        id: "toys",
        name: "oyuncaq",
        price: 5,
        img: "toy-story--uhd-amp-mobile-s-wallpaper.jpg"
    },

    {
        id: "phone",
        name: "telefon",
        price: 300,
        img: "\apple-iphone-14-pro-max-1.jpg"
    }
    ,
    {
        id: "cars",
        name: "masin",
        price: 13000,
        img: "13652.webp"
    },
    {

        id: "watermelon",
        name: "qarpiz",
        price: 0.75,
        img: "big-watermelon-slice-white-background-as-package-design-element-44517200.jpg"
    }
]

function cards(elem) {
    let row = document.querySelector(".row")

    let card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("col-3")
    card.style.width = "500px"
    card.style.height = "500px"
    row.appendChild(card)

    let id = document.createElement("h1")
    id.innerText=elem.id
    let name = document.createElement("h2")
    name.innerText=elem.name
    let price = document.createElement("h3")
    price.innerText=elem.price
    let img = document.createElement("img")
    img.src=elem.img
    img.style.width = "300px"
    img.style.height = "300px"
    let addBtn = document.createElement("button")
    addBtn.style.width = "200px"
    addBtn.style.height = "30px"
    addBtn.innerText = "Add Product"
    




    card.appendChild(id)
    card.appendChild(name)
    card.appendChild(price)
    card.appendChild(img)
    card.appendChild(addBtn)

}
products.forEach(elem => cards(elem))

