// call the html elements
let slideimges = Array.from(
  document.querySelectorAll(".hero-box .slider .img-holder img")
);
let nextBtn = document.querySelector("#right-arrow");
let previousBtn = document.querySelector("#left-arrow");
let boltsHolder = document.querySelector(".bolts");
// create numbers data
let conte = 1;
let length = slideimges.length;
// create li elements
for (i = 1; i < length + 1; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-index", i);
  li.className = "bolt";
  if (conte === i) {
    li.className = "bolt active";
  }
  boltsHolder.appendChild(li);
}
let liElement = document.querySelectorAll(".bolts li");
check();
//Button Event
nextBtn.onclick = next;
previousBtn.onclick = prev;
liElement.forEach((li) => {
  li.addEventListener("click", () => {
    conte = +li.dataset.index;
    check();
  });
});

// Create Function :
function check() {
  slideimges.forEach((img) => {
    if (img.className == "active") {
      img.className = "";
    }
  });
  liElement.forEach((li) => {
    li.classList = "bolt";
    if (li.dataset.index == conte) {
      li.classList = "bolt active";
    }
  });
  slideimges[conte - 1].classList = "active";
  btnCheck();
}
function btnCheck() {
  if (conte === length) {
    nextBtn.style.cursor = "not-allowed";
    nextBtn.style.opacity = ".4";
  } else {
    nextBtn.style.cursor = "pointer";
    nextBtn.style.opacity = "1";
  }
  if (conte === 1) {
    previousBtn.style.cursor = "not-allowed";
    previousBtn.style.opacity = ".4";
  } else {
    previousBtn.style.cursor = "pointer";
    previousBtn.style.opacity = "1";
  }
}
function next() {
  if (conte < length) {
    conte++;
  }
  check();
}
function prev() {
  if (1 < conte) {
    conte--;
  }
  check();
}
