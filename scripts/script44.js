document.getElementsByTagName("nav")[0].addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    let content = e.target.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
});
