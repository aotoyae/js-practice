const openBtn = document.querySelector(".open");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  container.style.display = "flex";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  openBtn.style.display = "block";
  container.style.display = "none";
});
