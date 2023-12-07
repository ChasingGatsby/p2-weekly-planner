const elements = document.querySelectorAll(".weekday");

let animation = anime({
  targets: elements,
  translateY: 1000,
  delay: anime.stagger(150, { direction: "reverse" }),
  direction: 'reverse'
});
