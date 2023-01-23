const header = document.querySelectorAll('.header')
const rotated = document.querySelectorAll(".header__logo");
const secondBlock = document.querySelector('.feedback')
const headerHeight = 94

function setHeader () {
  const scrollPoint = window.scrollY + headerHeight

  let blockPoint = headerHeight - (scrollPoint - secondBlock.offsetTop)
  if (blockPoint <= 0) blockPoint = 0
  if (scrollPoint > secondBlock.offsetTop) {
    header[0].style = `max-height: ${blockPoint ? blockPoint - 8 : blockPoint}px; padding-bottom: 0;`
  } else {
    header[0].style = `max-height: ${headerHeight + 64}px;`
  }
}

window.addEventListener("scroll", () => {
  let offset = window.scrollY * 0.2;
  rotated.forEach(rot => rot.style.transform = `rotate(${offset}deg)`)
  window.requestAnimationFrame(setHeader)
});
