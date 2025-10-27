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
});
