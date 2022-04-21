//AnimeJS
let introTextAnimation = anime({
    targets: '.start-text',
   translateX: 50,
   opacity: 1,
   duration: 3000,
//    loop: true
});

let headerListAnimation = anime({
    targets: '.ul',
    opacity: 1,
    duration: 2000,
    translateY: 10
})

//Scrollmagic

let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement:''
});