const mainFrame = document.querySelector("#mainFrame");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slide = document.querySelector(".slide");
const dotsContainer = document.querySelector(".dotsContainer");

const imgs = [
  { src: "./imgs/img1.jpeg" },
  { src: "./imgs/img2.jpeg" },
  { src: "./imgs/img3.jpeg" },
  { src: "./imgs/img4.jpeg" },
  { src: "./imgs/img5.jpeg" },
  { src: "./imgs/img6.jpeg" },
  { src: "./imgs/img7.jpeg" },
  { src: "./imgs/img8.jpeg" },
];

let imgIndex = 0;
let intervalId = null;
function parseIndex(index) {
  if (index > imgs.length - 1) {
    return 0;
  } else if (index < 0) {
    return imgs.length - 1;
  }
  return index;
}
function highlightDot(index) {
  dotsContainer
    .querySelectorAll(".dots")
    .forEach((dot) => dot.classList.remove("dots-hl"));

  dotsContainer
    .querySelector(`.dots[data-index='${index}']`)
    .classList.add("dots-hl");
}

nextBtn.addEventListener("click", () => {
  imgIndex++;
  imgIndex = parseIndex(imgIndex);
  highlightDot(imgIndex);
  mainFrame.src = imgs[imgIndex].src;
});

prevBtn.addEventListener("click", () => {
  imgIndex--;
  imgIndex = parseIndex(imgIndex);
  highlightDot(imgIndex);
  mainFrame.src = imgs[imgIndex].src;
});
for (let i = 0; i <= imgs.length - 1; i++) {
  const dot = document.createElement("div");
  dot.setAttribute("class", "dots");
  dot.setAttribute("data-index", i);
  dotsContainer.appendChild(dot);
}

dotsContainer.addEventListener("click", (e) => {
  if (!e.target.className.includes("dots")) return;
  imgIndex = +e.target.dataset.index;
  highlightDot(imgIndex);
  console.log(imgIndex);
  mainFrame.src = imgs[imgIndex].src;
});

slide.addEventListener("click", () => {
  if (slide.className.includes("sliding")) {
    slide.classList.remove("sliding");
    slide.textContent = "Start Slideshow";
    clearInterval(intervalId);
  } else {
    slide.classList.add("sliding");
    slide.textContent = "Stop Slideshow";
    intervalId = setInterval(() => {
      imgIndex++;
      imgIndex = parseIndex(imgIndex);
      highlightDot(imgIndex);
      mainFrame.src = imgs[imgIndex].src;
    }, 2000);
  }
});
highlightDot(0);
