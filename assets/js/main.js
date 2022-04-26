$('.carousel__wrap').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    draggable: true,
    prevNextButtons: false,
    wrapAround: true
});

$('.btn--prev').on('click', function () {
    $('.main-carousel').flickity('previous');
});
$('.btn--next').on('click', function () {
    $('.main-carousel').flickity('next');
});

$('.product__wrap').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    groupCells: true
});
$('.product__carousel-wrap').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    draggable: true,
    prevNextButtons: false,
    wrapAround: true
});
// fancy app 
Fancybox.bind("[data-fancybox='products']", {
    // Your options go here
    infinite: false,
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "next",
    ArrowDown: "prev",
    ArrowRight: "next",
    ArrowLeft: "prev",
});

// click open aside menu 
let openMenuAside = () => {
    let menuAsideBlock = document.querySelector(".menu__aside .menu__aside-block"),
        menuAside = document.querySelector(".menu__aside"),
        menuScroll = document.querySelector(".menu__scroll")


    menuAsideBlock.addEventListener("click", (e) => {
        e.stopPropagation()
        menuAside.classList.toggle("is-opened")
        document.querySelector("body").style.overflow = "hidden";
        menuScroll.classList.remove("active")

    })

    document.addEventListener("click", (e) => {
        menuAside.classList.remove("is-opened")
        document.querySelector("body").style.overflow = "initial";

    })

}
openMenuAside()

let activeMenuScroll = () => {
    let menuScroll = document.querySelector(".menu__scroll")
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        menuScroll.classList.add("active")
    } else {
        menuScroll.classList.remove("active")

    }
}
window.addEventListener("scroll", activeMenuScroll)

let scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
$(".footer__back-top a").click(scrollTop);

// open menu mobile

let openMenuMobile = () => {
    let menuMobile = document.querySelector(".menu__mobile"),
        menuMobileItem = document.querySelectorAll(".menu__mobile .menu__mobile-item")

    menuMobileItem[0].addEventListener("click", (e) => {
        e.stopPropagation()
        menuMobile.classList.toggle("is-opened")
        document.querySelector("html").classList.toggle("--hide")
    })
    document.addEventListener("click", (e) => {
        menuMobile.classList.remove("is-opened")
        document.querySelector("html").classList.remove("--hide")


    })
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menuMobile.classList.remove("is-opened")
        }
    })
}
openMenuMobile()