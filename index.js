console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const bookmarkRed = document.querySelector('[data-js="ribbon"]');

bookmarkRed.addEventListener("click", () => {
  bookmarkRed.classList.toggle("red");
  console.log(bookmarkRed);
});

const output = document.querySelector('[data-js="answer-output"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
answerButton.addEventListener("click", () => {
  output.innerHTML = "flex-direction";
});

const pageName = document.querySelector('[data-js="pageName"]');
const footerBackgroundHome = document.querySelector('[data-js="footerHome"]');
const footerBackgroundBookmark = document.querySelector(
  '[data-js="footerBookmark"]'
);
const footerBackgroundProfile = document.querySelector(
  '[data-js="footerProfile"]'
);

if (pageName.classList.contains("home")) {
  footerBackgroundHome.classList.add("selectedBackground");
}
if (pageName.classList.contains("bookmark")) {
  footerBackgroundBookmark.classList.add("selectedBackground");
}
if (pageName.classList.contains("profile")) {
  footerBackgroundProfile.classList.add("selectedBackground");
}
