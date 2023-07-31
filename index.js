gsap.from("#nav",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-20
})
gsap.from("#part3",{
    delay:.4,
    opacity:0,
    duration:.8,
    y:190,
    rotate:-15
    

})
gsap.from("#part1 img",{
    delay:1,
    // opacity:0,
    duration:1,
  scale:5

    

})
gsap.from("#cry h1,#car h2",{
    delay:1,
    opacity:0,
    duration:.4 ,
    stagger:.2,
    y:200,
    

})

gsap.from("#part3 h3",{
    delay:3.3,
    opacity:0,
    duration:0.5,
    x:-90,
    

})
gsap.from("#page2 #first",{
    delay:1,
    opacity:0,
    duration:.5,
    y:70,
   scrollTrigger:{
    trigger:"#page2 #first",
    scroller:"body",
    // start:"top 0%",
    // markers:true

   } 

})

gsap.from("#page2 #sec",{
    delay:1,
    opacity:0,
    duration:.5,
    y:70,
   scrollTrigger:{
    trigger:"#page2 #sec",
    scroller:"body",
    // start:"top 0%",
    // markers:true

   } 

})

gsap.from("#page2 #center ",{
    // delay:0.5,

    opacity:0,
    duration:1,
    width:30,
   scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 50%",
    // markers:true

   } 

})
gsap.from("#photo ",{
    delay:0.3,
    opacity:0,
    duration:1.2,
    y:190,
   scrollTrigger:{
    trigger:"#photo",
    scroller:"body",
    // start:"top 0%",
    // markers:true

   } 
})

gsap.from("#page4 img ",{
    delay:1,
    opacity:0,
    duration:1,
rotate:-190,
   scrollTrigger:{
    trigger:"#page4 img",
    scroller:"body",
    // start:"top 0%",
    // markers:true
    scrub:1,

   } 
})

// var page2=document.querySelector("#page2")
// var cent =document.querySelector("#center")
// page2.addEventListener("mouseenter",function(){

// })