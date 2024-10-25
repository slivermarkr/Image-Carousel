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

function parseIndex(index) {
  if (index > imgs.length - 1) {
    return 0;
  } else if (index < 0) {
    return imgs.length - 1;
  }
  return index;
}
