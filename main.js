let our_skills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
window.onscroll = function () {
  if (window.scrollY >= our_skills.offsetTop - 100) {
    console.log("good");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
