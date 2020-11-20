var subject_line = document.getElementById("subject-line");
var sticky = subject_line.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    subject_line.classList.add("sticky");
  } else {
    subject_line.classList.remove("sticky");
  }
}

window.addEventListener("scroll", myFunction);
