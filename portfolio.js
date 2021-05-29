const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show")
        })
    }
}
showMenu("nav-toggle", "nav-menu")

const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

const sections = document.querySelectorAll("section[id]")
window.addEventListener("scroll", scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = curent.offsetHeight
        const sectionTop = curent.offsetTop - 50;
        sectionId = current.getAtribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})

sr.reveal(".home__title", {})
sr.reveal(".home__scroll", {delay: 200})
sr.reveal(".home__img", {origin: "right", delay: 400})
