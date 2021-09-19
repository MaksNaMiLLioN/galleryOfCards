const slides = document.querySelectorAll('.slide')

console.log(slides)

function removeActive() {
    slides.forEach(slide=>{
        slide.classList.remove('active')
    })
}

//for (const slide of slides) { 
//    slide.addEventListener('click', ()=> {
//        removeActive()
//        slide.classList.add('active')}
//    )

//}

for (const slide of slides) {
    slide.addEventListener('click', ()=>{
        removeActive()
        slide.classList.add('active')
    })
}


