
const basketnumber = document.querySelector("#basketnumber")
let i=0;
const basket =[]
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    speed: 1000,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    }
  
    
  });


  const products = [

      {
        img: "7e4edf23-0fe1-4935-aac9-7f68f81b0cdf.webp",
        id: "nike",
        name: "Running shoes & trainer",
        price: "120$",
        count: 0
    },

    {
        img: "4988759_Black_White.webp",
        id: "adidas",
        name: "Runner shoes",
        price: "55$",
        count: 0
    }
    ,
    {
        img: "gemini16.webp",
        id: "under armour",
        name: "running shoes",
        price: "70$",
        count: 0
        
    },
    {

        img: "21FW_W-Gender_FD_PLP_Interactive-Wallpaper_Tile_Training_DT2_tcm274-763427.webp",
        id: "Reebok",
        name: "Sport shoes & casual",
        price: "65$",
        count: 0

    }
]




function cards(elem) {
    let row = document.querySelector(".row")

    let card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("col-3")
    

    row.appendChild(card)

    let img = document.createElement("img")
    img.src=elem.img
    let id = document.createElement("h2")
    id.innerText=elem.id
    let name = document.createElement("h3")
    name.innerText=elem.name
    let price = document.createElement("h3")
    price.innerText=elem.price

    name.style.fontSize = ("25px")
   
    let buttondiv = document.createElement("div")
    
    let addBtn = document.createElement("button")
    addBtn.innerText = "Add Product"
    buttondiv.appendChild(addBtn)
    // buttondiv.classList(.button)
    // let bag1={
    //     name:elem.name,
    //     price:elem.price,  
    //     count: 0,
        
    // }
    // let bag2={
    //     name:elem.name,
    //     price:elem.price,  
    //     count1: 0,
        
    // }
    // let bag3={
    //     name:elem.name,
    //     price:elem.price,  
    //     count2: 0,
        
    // }
    // let bag4={
    //     name:elem.name,
    //     price:elem.price,  
    //     count3: 0,
        
    // }

    
    
    
    card.appendChild(img)
    card.appendChild(id)
    card.appendChild(name)
    card.appendChild(price)
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











