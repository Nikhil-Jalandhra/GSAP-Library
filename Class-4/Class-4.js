
var tl = gsap.timeline()

tl.from("#nav",{
    x: -1500,
    duration: 1.5,
    delay: 0.3,
    opacity: 0,
})

tl.from("#nav h1,h4,h3",{
    y: -80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})

tl.from("#left h1",{
     x: -800,
     opacity: 0,
     duration: 0.7,
     stagger: 0.3
})

gsap.from("#right img",{
    scale: 0,
    duration: 2,
    delay: 4,
})


gsap.from("#page2  .box",{
    scale: 0,
    opacity: 0,
    duraion: 2,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#page2 .box",
        // markers: true,
        start: "top 70%"
    }
})