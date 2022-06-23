
//Gallery

let listGallery = document.querySelectorAll(".product .product__item")
let btnGallery = document.querySelectorAll(".product .product__menu a")
let currentBtn = 0;

btnGallery.forEach(function(element,index){
    if(element.classList.contains("active")){
        currentBtn = index;
    }

    element.addEventListener("click",function(event){
        event.preventDefault();

        btnGallery[currentBtn].classList.remove("active")
        listGallery[currentBtn].classList.remove("active")

        btnGallery[index].classList.add("active")
        listGallery[index].classList.add("active")

        currentBtn = index
    })
})

