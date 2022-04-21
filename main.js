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













// let scene1 = new ScrollMagic.Scene({
//     triggerElement:'#about-me'
// })
// .setClassToggle('#about-me', 'fade-in')
// .addTo(controller)
// .addIndicators();

// let scene2 = new ScrollMagic.Scene({
//     triggerElement:'#education'
// })
// .setClassToggle('#education', 'fade-in')
// .addTo(controller)
// .addIndicators();

// let scene3 = new ScrollMagic.Scene({
//     triggerElement:'#portfolio'
// })
// .setClassToggle('#portfolio', 'fade-in')
// .addTo(controller)
// .addIndicators();