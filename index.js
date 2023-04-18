console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const bookmarkRed = document.querySelector('[data-js="ribbon"]');

bookmarkRed.addEventListener("click", () => {
  bookmarkRed.classList.toggle("red");
  console.log(bookmarkRed);
});
