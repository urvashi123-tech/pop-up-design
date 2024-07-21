const welcome=document.querySelector("#module1")
const team=document.querySelector("#module2")
const work=document.querySelector("#module3")
const contact=document.querySelector("#module4")
const first_pop=document.querySelector("#pop1")
const seconed_pop=document.querySelector("#pop2")
const third_pop=document.querySelector("#pop3")
const fourth_pop=document.querySelector("#pop4")
const close=document.querySelector(".close")
const close2=document.querySelector(".close2")
const close3=document.querySelector(".close3")
const close4=document.querySelector(".close4")
const anker=document.querySelector(".anker")
const link=document.querySelector("#def_link")
// const body_close=document.querySelector("#container")
welcome.addEventListener("click",()=>{
first_pop.style.display="block"
})
close.addEventListener("click",()=>{
    first_pop.style.display="none"
})
// body_close.addEventListener("click",()=>{
//     first_pop.style.display="none"
// })
team.addEventListener("click",()=>{
    seconed_pop.style.display="block"
    })
    close2.addEventListener("click",()=>{
        seconed_pop.style.display="none"
    })
link.addEventListener("click",()=>{
anker.style.display="block"
})
contact.addEventListener("click",()=>{
    fourth_pop.style.display="block"
    })
    close4.addEventListener("click",()=>{
        fourth_pop.style.display="none"
    })
    work.addEventListener("click",()=>{
        third_pop.style.display="block"
        })
        close3.addEventListener("click",()=>{
            third_pop.style.display="none"
        })
const forward=document.querySelector("#forward")
const backward=document.querySelector("#backward")
const img_1=document.querySelector(".img_1")
const img_2=document.querySelector(".img_2")
const img_3=document.querySelector(".img_3")
const img_4=document.querySelector(".img_4")
const img_11=document.querySelector(".img_11")
const img_12=document.querySelector(".img_12")
const img_13=document.querySelector(".img_13")
const img_14=document.querySelector(".img_14")
const circle1=document.querySelector(".circle1")
const circle2=document.querySelector(".circle2")
forward.addEventListener("click",()=>{
circle1.style.backgroundColor="white";
circle2.style.backgroundColor="blue";
img_1.style.display="none"
img_2.style.display="none"
img_3.style.display="none"
img_4.style.display="none"
img_11.style.display="block"
img_12.style.display="block"
img_13.style.display="block"
img_14.style.display="block"
})
backward.addEventListener("click",()=>{
    circle1.style.backgroundColor="blue";
    circle2.style.backgroundColor="white";
    img_1.style.display="block"
    img_2.style.display="block"
    img_3.style.display="block"
    img_4.style.display="block"
    img_11.style.display="none"
    img_12.style.display="none"
    img_13.style.display="none"
    img_14.style.display="none"
    })