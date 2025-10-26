const fact = [
  <button type="button">Show rabbit breed!</button>
<figure>
  <img src="https://placekitten.com/200/200" />
  <figcaption>This is a Thrianta rabbit!</figcaption>
</figure>
<figure>
  <img src="https://placekitten.com/200/200" />
  <figcaption>This is a American Fuzzy Lop!</figcaption>
</figure>
<figure>
  <img src="https://placekitten.com/200/200" />
  <figcaption>This is a Lionhead rabbit!</figcaption>
</figure>
<figure>
  <img src="https://placekitten.com/200/200" />
  <figcaption>This is a Alaskan rabbit!</figcaption>
</figure>
<figure>
  <img src="https://placekitten.com/200/200" />
  <figcaption>This is a Lionhead rabbit!</figcaption>
</figure>
];

const factParagraph = document.getElementById("rabbit");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fact.length);
  factParagraph.textContent = fact[randomIndex];
});
<button type="button">Show rabbit breed!</button>
<figure>
  <img src="https://placekitten.com/200/200" />
  <figcaption>This is a lovely kitten.</figcaption>
</figure>
