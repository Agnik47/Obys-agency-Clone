function loaderAnimation() {
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
  });

  tl.to(".loader", {
    opacity: 0,
    duration: 0.4,
    delay: 0.2  
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });

  tl.to(".loader", {
    display: "none",
  });

  tl.from(".nav", {
    opacity: 0,
  });

  tl.from("#hero1 h1, #hero2 h1, #hero3 h1, #hero4 h1", {
    y: 120,
    stagger: 0.2,
  });
}

function cursurAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursr", {
      left: dets.x,
      top: dets.y,
      duration: 0.2,
    });
  });

  Shery.makeMagnet("#nav-p2 h4");
}

loaderAnimation();
cursurAnimation();
