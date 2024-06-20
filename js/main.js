//Navigation bar effects on scroll
document.querySelector("header").classList.toggle("sticky",window.scrollY > 0);
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
    
});

//Multiple Professions text type

const typed =new Typed('.multiple-text',{
    strings : ["Frontend Web Developer", "Machine Learning Engineer", "Full Stack Developer", "Software Developer"],//,"Machine Learning Engineer"
    typeSpeed:75,
    backSpeed:75,
    backDelay:1000,
    loop:true,
});

//About Section Education and Experience Tabs
const tabContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about .content");

tabContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click",() => {
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click",() => {
        portfolioModal(i);
    });
});
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Portfolio Section Filter Functionality
let mixerPortfolio = mixitup('.content .portfolio-list', {
    selectors:{
        target : '.img-card-container'
    },
    animation : {
        duration : 300
    }
});

const linkWork = document.querySelectorAll('.work_item');
function activeWork(){
    linkWork.forEach(L=> L.classList.remove('active-work'));
    this.classList.add('active-work');
}
linkWork.forEach(L=> L.addEventListener('click', activeWork));

//Our clients - Swiper
var swiper = new Swiper(".client-swiper",{
    slidesPerView:1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());

});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", this.window.scrollY >500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", ()=>{
        navigation.classList.remove("active");
    });
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    // reset : true,
    distance : '60px',
    duration : 2000,
    delay : 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02, .about-info', { delay: 300, origin : 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 300, origin : 'right' });

ScrollReveal().reveal('.contact-left li', { delay: 300, origin : 'left', interval:150});
ScrollReveal().reveal('.home-img, .about-img, .info, .scroll-down', { delay: 400, origin : 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 400, origin : 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 300, origin : 'right', interval:150});

ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', { delay: 500, origin : 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card, .media-icons i, .details-container', { delay: 600, origin : 'bottom', interval:150});
ScrollReveal().reveal('footer .group, .work_item', { delay: 300, origin : 'top', interval : 150});
