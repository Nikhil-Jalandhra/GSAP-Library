 var tl = gsap.timeline()

 function time(){
    var a = 0
    setInterval(() => {
        a = a + Math.floor(Math.random()*10)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a=100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    }, 50);
 }
 
 tl.to("#loader h1",{
    delay: 0.5,
    duration:1,
    onStart:time()
 })
 
 tl.to("#loader",{
    top:"-100%",
    delay: 0./5,
    duration: 1.5
 })

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