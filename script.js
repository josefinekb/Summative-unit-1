const facts = [
  "Thrianta rabbit",
  "American Fuzzy Lop",
  "Lionhead rabbit",
  "Netherland Dwarf rabbit",
  "Alaskan rabbit"
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
  
  button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
  button.textContent = "Click again for more!";
});
    const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
  document.querySelector(".card").style.backgroundColor = "#ffd700";
});
