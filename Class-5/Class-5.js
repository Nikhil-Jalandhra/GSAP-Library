gsap.to("#page1 p",{
    transform: "translateX(-300%)",
    scrollTrigger:{
        trigger: "#page1",
        scroller: "body",
        // markers: true,
        start: "top 0",
        end: "top -200%",
        scrub: 3,
        pin: true,
    }
})