//Special Countdown
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secondItem = document.querySelector("#sec");

let countDown = () => {
  let futureDate = new Date("25 October 2023");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;
  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secondItem.innerHTML = sec;
};

countDown();

setInterval(countDown, 1000);

//Scroll Back To Top
function scrollBackToTop() {
  let scrollId = document.querySelector("#scrollUp");
  window.onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition >= 250) {
      scrollId.classList.add("scrollActive");
    } else {
      scrollId.classList.remove("scrollActive");
    }
  };
}

scrollBackToTop();

//Navbar close
let navBar = document.querySelectorAll(".nav-link");
let navBarCollapse = document.querySelector(".collapse.navbar-collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navBarCollapse.classList.remove("show");
  });
});
