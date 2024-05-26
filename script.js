const current = document.querySelector("#current");//#id
const imgs = document.querySelector(".imgs");//.class
const img = document.querySelectorAll(".imgs img");//.imgs contains all the img tags (child reliable)
const opacity = 0.6;

// img[5].style.opacity = opacity;

imgs.addEventListener("click",(event)=>{

    img.forEach((imgElem)=>{
        imgElem.style.opacity = 1;
    })
    
    const clickedimgurl=event.target.src;
    current.src=clickedimgurl;
    current.classList.add("fade-In");
    setTimeout(()=>{
        current.classList.remove("fade-In");
    },600)

    event.target.style.opacity = opacity;
})
