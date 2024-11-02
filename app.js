let outerdiv = document.querySelector(".outer-div")
let innerdiv = document.querySelector(".inner-div")
let access = document.querySelector('.access')

outerdiv.addEventListener("mouseenter",()=>{
    innerdiv.classList.remove("div-left-end")
    innerdiv.classList.add("div-right-end")
})
outerdiv.addEventListener("mouseleave",()=>{
    innerdiv.classList.remove("div-right-end")
    innerdiv.classList.add("div-left-end")
})
outerdiv.addEventListener("mouseenter",()=>{
    access.classList.remove("access-left-end")
    access.classList.add("access-right-end")
})
outerdiv.addEventListener("mouseleave",()=>{
    access.classList.remove("access-right-end")
    access.classList.add("access-left-end")
})

