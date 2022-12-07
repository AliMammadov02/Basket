const basketnumber = document.querySelector("#basketnumber")
let i=0;
const basket =[]





const products = [

    {
        id: "toys",
        name: "oyuncaq",
        price: 5,
        img: "toy-story--uhd-amp-mobile-s-wallpaper.jpg",
        count: 1
    },

    {
        id: "phone",
        name: "telefon",
        price: 300,
        img: "\apple-iphone-14-pro-max-1.jpg",
        count: 0
    }
    ,
    {
        id: "cars",
        name: "masin",
        price: 13000,
        img: "13652.webp",
        count: 0
        
    },
    {

        id: "watermelon",
        name: "qarpiz",
        price: 0.75,
        img: "big-watermelon-slice-white-background-as-package-design-element-44517200.jpg",
        count: 0

    }
]

function cards(elem) {
    let row = document.querySelector(".row")

    let card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("col-3")
    card.style.width = "300px"
    card.style.height = "300px"
    row.appendChild(card)

    let id = document.createElement("h1")
    id.innerText=elem.id
    let name = document.createElement("h2")
    name.innerText=elem.name
    let price = document.createElement("h3")
    price.innerText=elem.price
    let img = document.createElement("img")
    img.src=elem.img
    img.style.width = "200px"
    img.style.height = "200px"
    let addBtn = document.createElement("button")
    addBtn.style.width = "200px"
    addBtn.style.height = "30px"
    addBtn.innerText = "Add Product"
    
    let bag1={
        name:elem.name,
        price:elem.price,  
        count: 0,
        
    }
    let bag2={
        name:elem.name,
        price:elem.price,  
        count1: 0,
        
    }
    let bag3={
        name:elem.name,
        price:elem.price,  
        count2: 0,
        
    }
    let bag4={
        name:elem.name,
        price:elem.price,  
        count3: 0,
        
    }

    
    
    
    card.appendChild(id)
    card.appendChild(name)
    card.appendChild(price)
    card.appendChild(img)
    card.appendChild(addBtn)
    localStorage.setItem("products" , JSON.stringify(products))

    addBtn.addEventListener("click", function () {
        i++
        basketnumber.innerHTML=i
        if(basket.some(x=>x.name==bag1.name)){
            basket.forEach(element =>{
                if(element.name==bag1.name){
                     element.count++ 
                }})
        }
        else{
            basket.push(products[0])
        }
            localStorage.setItem("basket[0]" ,JSON.stringify(basket[0]))
    })

    addBtn.addEventListener("click", function () {
        i++
        basketnumber.innerHTML=i
        if(basket.some(x=>x.name==bag2.name)){
            basket.forEach(element =>{
                if(element.name==bag2.name){
                     element.count1++ 
                }})
        }
        else{
            basket.push(products[1])
        }
            localStorage.setItem("basket[1]" ,JSON.stringify(basket[1]))
    })

    addBtn.addEventListener("click", function () {
        i++
        basketnumber.innerHTML=i
        if(basket.some(x=>x.name==bag3.name)){
            basket.forEach(element =>{
                if(element.name==bag3.name){
                     element.count2++ 
                }})
        }
        else{
            basket.push(products[2])
        }
            localStorage.setItem("basket[2]" ,JSON.stringify(basket[2]))
    })

    addBtn.addEventListener("click", function () {
        i++
        basketnumber.innerHTML=i
        if(basket.some(x=>x.name==bag4.name)){
            basket.forEach(element =>{
                if(element.name==bag4.name){
                     element.count3++ 
                }})
        }
        else{
            basket.push(products[3])
        }
            localStorage.setItem("basket[3]" ,JSON.stringify(basket[3]))
    })
}


products.forEach(elem => cards(elem))





