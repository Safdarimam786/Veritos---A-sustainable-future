// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

gsap.from('.nLink',{
    y: -10,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    stagger: 0.2
});

// gsap.from('#leftanimation', {
//     x: -50,
//     opacity: 0,
//     duration: 1,
//     delay: 0.3,
//     stagger: 0.5,
//     ease: Expo.easeInOut
// });

gsap.from('#leftanimation', {
  y: -70,
  opacity: 0,
  duration: 2,
  delay: 0.3,
  stagger: 0.5,
  ease: Expo.easeInOut
});

gsap.to('.boundingElem',{
    y: 0,
    duration: 2,
    delay: 0.3,
    ease: Expo.easeInOut,
    stagger: 0.1
});

gsap.from('.circlediv', {
    x: -50,
    opacity: 0,
    duration: 2,
    delay: 0.9,
    ease: Expo.easeInOut
});

gsap.from('#visit', {
    x: 50,
    opacity: 0,
    duration: 3,
    delay: 0.4,
    ease: Expo.easeInOut
});


// Shery.textAnimate(".w", {
//     style: 1,
//     y: 10,
//     delay: 0.3,
//     duration: 2,
//   });

  // Shery.imageEffect("#wobble", {
  //   style: 5,
  //   debug: true,
  //   gooey: true,
  //   config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.79,"range":[-1,1]},
  //   "zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},
  //   "ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},
  //   "shapeScale":{"value":{"x":0.51,"y":0.5}},"shapeEdgeSoftness":{"value":0,
  //   "range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},
  //   "scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},
  //   "growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},
  //   "durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},
  //   "masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},
  //   "geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},
  //   "onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,
  //   "range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,
  //   "range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  // })

let button = document.querySelector(".center button");

button.addEventListener("mouseover", function(){
    gsap.to(".last-page video", {
      opacity: 1,
      duration: 0.8,
      ease: Power4
    })
})

button.addEventListener("mouseleave", function(){
  gsap.to(".last-page video", {
    opacity: 0,
    duration: 0.8,
    ease: Power4
  })
})

gsap.from(".second-page h3", {
  x: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".second-page h3",
    scroller: "body",
    start: "top 70%",
    
  }
})

gsap.from(".second-page p", {
  x: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".second-page p",
    scroller: "body",
    start: "top 60%",
    
  }
})

gsap.from(".third-page .left", {
  x: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".third-page .left",
    scroller: "body",
    start: "top 50%",
    
  }
})

gsap.from(".third-page .right", {
  x: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".third-page .right",
    scroller: "body",
    start: "top 40%",
    
  }
})

gsap.from(".fourth-page imagediv", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".fourth-page imagediv",
    scroller: "body",
    start: "top 30%",
    
  }
})




const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
