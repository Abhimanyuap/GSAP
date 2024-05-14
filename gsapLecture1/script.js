
// gsap.to for making website animate from initial to final
// repeat property tells how many time animation will repeat if we give 1 then it repeat for 1 time after animating for time means total of 2 time animation will perform
// if in repeat -1 given then it becomes infinite loop

// yoyo property is used for making the element animate to initial to final then after that it comes to final to initial position
// gsap.to("#red", {
//     x : "500",
//     duration : 2,
//     delay : 1
// })
// gsap.to("#green",{
//     x:250,
//     y:250,
//     duration:2,
//     delay:1,
//     borderRadius: "50%",
//     backgroundColor:"yellow",
//     repeat:-1,
//     yoyo:true
// })

// gsap.from for making website animate from final to initial
// gsap.from("#red", {
//     x : "500",
//     duration : 2,
//     delay : 1,
//     scale:1.2,
//     repeat : -1,
//     yoyo: true
// })

// ---------- timeline ----------

var tl = gsap.timeline();

tl.from("h2", {
    y : -20,
    opacity : 0,
    duration : 0.5,
    // backgroundColor : "transparent"
})

tl.from("h4", {
    y : -10,
    opacity : 0,
    // duration : 0.1,
    stagger : 1
})

tl.from("h1",{
   y : -100,
   opacity : 0,
   scale : 0.1
})