let slideIndex = [1, 1, 1, 1];
let slideID = ["inequality", "primeary", "song", "poemGraphic"];

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let slides = document.getElementsByClassName(slideID[no]);
  let dots = document.getElementsByClassName(slideID[no] + "dot");

  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";
}
