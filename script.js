var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line-1-part1", {
  opacity: 0,
  delay: 0,
  onStart: function () {    
    var time = document.querySelector("#line-1-part1 h5");
    var count = 0;

    var Timer = setInterval(function () {
      if (count < 100) {
        count++;
        time.innerHTML = count;
      } else {
        count = 100;
        clearInterval(Timer);
      }
    }, 30);
  },
});

tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
})

tl.to(".loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3.5,
});

tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
})

tl.to(".loader", {
    display: "none"
})