const facts = [
  "I love drawing and creating digital art!",<img>
  "My favorite sport is basketball.",<img>
  "I enjoy coding small games.",<img>
  "I like to bake cupcakes on weekends."<img>
];
const facts = [
  "I love drawing and creating digital art!",<img>
  "My favorite sport is basketball.",<img>
  "I enjoy coding small games.",<img>
  "I like to bake cupcakes on weekends."<img>
];
const facts = [
  "I love drawing and creating digital art!",<img>
  "My favorite sport is basketball.",<img>
  "I enjoy coding small games.",<img>
  "I like to bake cupcakes on weekends."<img>
];
const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});
