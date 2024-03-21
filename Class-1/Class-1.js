gsap.to("#box", {
    x: 700,
    duration: 2,
    delay: 0.5,
    backgroundColor: "gray ",
    rotate: 360,
    scale: 0.5,
    repeat: -1,
})

gsap.to("#box1", {
    x: 700,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

// gsap.from("#box", {
//     x: 700,
//     duration: 5,
//     delay: 1,
//     backgroundColor: "black",
//     rotate: 360,
//     scale: 0.5
// })

gsap.to("h1",{
    x: 600,
    color: "orange",
    duration: 2,
    delay: 1,
})

gsap.to("h2",{
    x: 900,
    color: "white",
    duration: 2,
    delay: 3,
})

gsap.to("h3",{
    x: 800,
    color: "green",
    duration: 2,
    delay: 5,
})