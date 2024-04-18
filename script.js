const modal = document.querySelector(".modal");
const btn = document.querySelector(".myBtn");
const span = document.querySelector(".close");
const signIn = document.querySelector(".sign-in");

btn.onclick = function () {
  modal.style.display = "block";
};

modal.onclick = function (event) {
  if (event.target !== signIn) {
    modal.style.display = "none";
  } else {
    modal.style.display = "none";
    btn.style.opacity = "0";
  }
};
