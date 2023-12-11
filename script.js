let anim = gsap.timeline();

anim.from(
  ".nav-text-1 img ,.nav-text-1 h1 , .nav-text-2 ,.nav-text-3 h3,.nav-text-3 button",
  {
    delay: 1,
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
  }
);

anim.from(".hero h1", {
  x: -100,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});
anim.from(".images img", {
  x: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});

anim.to("h5", {
  y: 10,
  yoyo: true,
  repeat: -1,
  duration: 0.6,
});
