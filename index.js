const navMenu =document.getElementById('nav-menu'),
toggleMenu =document.getElementById('nav-toggle'),
closeMenu=document.getElementById('nav-close')

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

const navlink=document.querySelectorAll('nav_link')
function linkAction(){
    navMenu.classList.remove('show')
}
navlink.forEach(n=> n.addEventListener('click',linkAction))


const section=document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)


function scrollActive(){
    const scrolly =window.pageYOffset
    section.forEach(current => {
        const sectionHeight =current.offsetHeight
        const sectionTop =current.offsetTop -50
        sectionId = current.getAttribute("id")

        if( scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
            document.querySelectorAll('.nav_menua[href*='+ sectionId + ']').classList.add('active')
        }
        else{
            document.querySelectorAll('.nav_menua[href*='+ sectionId + ']').classList.add('active')
        }
    })
}