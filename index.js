const mainContent = document.querySelector(".content-start");
const finalContent = document.querySelector(".content-end");
const btnSubmit = document.getElementById("submit");
const btnRate = document.getElementById("rate-again");
const rating = document.getElementById("rate");
const rates = document.querySelectorAll(".btn__rate");

btnSubmit.addEventListener("click", function () {
  finalContent.classList.remove("hidden");
  mainContent.classList.add("hidden");
});

btnRate.addEventListener("click", function () {
  mainContent.classList.remove("hidden");
  finalContent.classList.add("hidden");
});

rates.forEach((r) => {
  r.addEventListener("click", function () {
    rating.innerHTML = r.innerHTML;
  });
});
