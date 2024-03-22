
gsap.from("#nav img, #nav h3, #nav h4, #nav button",{
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.2
})

gsap.from("#main h1",{
    y: 100,
    duration: 1,
    Opacity: 0,
    stagger: 0.3,
    delay: 1,
})

gsap.from(".show",{
    scale: 0,
    opacity: 0,
    delay: 2,
    duration: 1,
    stagger: 0.3,
})
gsap.from("h5",{
    y: 40,
    scale: 0,
    opacity: 0,
    delay: 3,
})

