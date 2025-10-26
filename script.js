const fact = [
  "This is a Thrianta rabbit!",
  "This is a American Fuzzy Lop!",
  "This is a Lionhead rabbit!",
  "This is a Alaskan rabbit!"
];

const factParagraph = document.getElementById("rabbit");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fact.length);
  factParagraph.textContent = fact[randomIndex];
});
