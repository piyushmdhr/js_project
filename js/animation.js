const cards = document.querySelectorAll(".wrapper");
const cardsTwo = document.querySelectorAll(".wrapperTwo")
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 10;
const FOCUS_SCALE = 1.2; 

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = ( horizontal * THRESHOLD - THRESHOLD / 2).toFixed(2);
  const rotateY = (THRESHOLD / 2 - vertical * THRESHOLD).toFixed(2);

  currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}


function handleFocus(e) {
  e.currentTarget.style.transform = `scale(${FOCUS_SCALE})`;
}

function resetStyles(e) {
  e.currentTarget.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
}

if (!motionMatchMedia.matches) {
  cards.forEach((card) => {
    card.addEventListener("mousemove", handleHover);
    card.addEventListener("mouseleave", resetStyles);
  });
}
  if (!motionMatchMedia.matches) {
    cardsTwo.forEach((cardsTwo) => {
      cardsTwo.addEventListener("mousemove", handleHover);
      cardsTwo.addEventListener("mouseleave", resetStyles);
    });
}

