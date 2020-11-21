var side_nav = document.getElementsByTagName("main")[0].firstElementChild
  .lastElementChild;
console.log(side_nav);

var sticky = side_nav.offsetTop;

console.log(sticky);

function myFunction() {
  if (window.pageYOffset >= sticky) {
    side_nav.classList.add("sticky");
  } else {
    side_nav.classList.remove("sticky");
  }
}

window.addEventListener("scroll", myFunction);
