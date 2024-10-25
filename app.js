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

function parseIndex(index) {
  if (index > imgs.length - 1) {
    return 0;
  } else if (index < 0) {
    return imgs.length - 1;
  }
  return index;
}
nextBtn.addEventListener("click", () => {
  imgIndex++;
  imgIndex = parseIndex(imgIndex);
  mainFrame.src = imgs[imgIndex].src;
});

prevBtn.addEventListener("click", () => {
  imgIndex--;
  imgIndex = parseIndex(imgIndex);
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
  console.log(imgIndex);
  mainFrame.src = imgs[imgIndex].src;
});
