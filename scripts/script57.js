const sticky1 = articleCard.offsetTop;

window.addEventListener("scroll", (e) => {
  let articleCard = document.getElementById("articleCard");
  if (window.pageYOffset >= sticky1) {
    articleCard.classList.add("sticky");
  } else {
    articleCard.classList.remove("sticky");
  }
});
