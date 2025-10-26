const fact = [
  <button type="button">Show rabbit breed!</button>
<figure>
  <img src="https://www.pinterest.com/pin/94505292175616100//200/200" />
  <figcaption>This is a Thrianta rabbit!</figcaption>
</figure>
<figure>
  <img src="https://www.pinterest.com/pin/2322237301001824//200/200" />
  <figcaption>This is a American Fuzzy Lop!</figcaption>
</figure>
<figure>
  <img src="https://www.pinterest.com/pin/49469295904440026//200/200" />
  <figcaption>This is a Lionhead rabbit!</figcaption>
</figure>
<figure>
  <img src="https://petcorner.pangovet.com/wp-content/uploads/2024/06/Alaska-Rabbit-1.webp/200/200" />
  <figcaption>This is a Alaskan rabbit!</figcaption>
</figure>
<figure>
  <img src="https://images.squarespace-cdn.com/content/v1/5f11acca056d9b31bdc66141/9a5782d5-17f9-4dec-a34a-84ffeb0abac3/IMG_0354.jpg?format=1000w/200/200" />
  <figcaption>This is a Netherland Dwarf rabbit!</figcaption>
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
