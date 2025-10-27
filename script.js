const facts = [
  "This is a Thrianta rabbit!",
  "This is a American Fuzzy Lop!",
  "This is a Lionhead rabbit!",
  "This is a Netherland Dwarf rabbit!",
  "This is a Alaskan rabbit!"
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});
