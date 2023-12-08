function createDrinks() {
  const drinks = document.createElement("div");
  drinks.setAttribute("id", "drinks");

  const description = document.createElement("p");
  description.classList.add('description');
  description.textContent = 'a list of our drinks'

  drinks.appendChild(description)

  return drinks;
}

function loaddrinks() {
  const main = document.getElementById("main-container");
  main.textContent = "";
  main.appendChild(createDrinks());
}

export default loaddrinks;