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



const fromLeft = {
    // curviness: 1.25,
    // autoRotate: true,
    values: [
        {x:"100%"}
    ]
}

const fromRight = {
    curviness: 1.25,
    values: [
        {x:"-100%"},
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('section.panel.education', 1, {
        bezier: fromLeft,
        ease: Power1.easeInOut,
    })
)

tween.add(
    TweenLite.to('section.panel.portfolio', 1, {
        bezier: fromRight,
        ease: Power1.easeInOut,
    })
);

let controller = new ScrollMagic.Controller();
// let triggerHook = scene.triggerHook();

const scene1 = new ScrollMagic.Scene({
    triggerElement: "section.panel.about-me",
    triggerHook: 0,
    duration: "300%",
})
.setTween(tween)
.addIndicators()
.setPin("section.panel.about-me")
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "section.panel.education",
    triggerHook: 0,
    duration: "300%",
})
.setTween(tween)
.addIndicators()
.setPin("section.panel.education")
.addTo(controller);












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