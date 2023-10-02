let our_skills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
// window.onscroll = function () {
//   if (window.scrollY >= our_skills.offsetTop) {
//     console.log("good");
//     spans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
// };

//events time
// the End of the years
let countdowndata = new Date("Dec 31,2023 23:59:59").getTime();
let counter = setInterval(() => {
  //get data time now
  let datanow = new Date().getTime();
  //find the data difference between now and countdown data
  let datadeif = countdowndata - datanow;
  //get time unites
  // let days=Math.floor(datadeif/1000/60/60/24)
  let days = Math.floor(datadeif / (1000 * 60 * 60 * 24));
  let hours = Math.floor((datadeif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((datadeif % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((datadeif % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    second < 10 ? `0${second}` : second;
  if (datadeif < 0) {
    clearInterval(counter);
  }
}, 1000);

//stats
let nums = document.querySelectorAll(".stats .number");
let sectionss = document.querySelector(".stats");
let started = false; //function started no

//create scroll

  window.onscroll = function () {
  if (
    (window.scrollY >= sectionss.offsetTop,
    window.scrollY >= our_skills.offsetTop)
  ) {
    if (!started) {
      nums.forEach((num) => start(num));
      spans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
    started = true;
  }
};
//create time count
function start(el) {
  let gols = el.dataset.gols;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == gols) {
      clearInterval(count);
    }
  }, 2000 / gols);
}
