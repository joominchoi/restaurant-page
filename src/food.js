function createFood() {
  const food = document.createElement("div");
  food.setAttribute("id", "food");

  const description = document.createElement("p");
  description.setAttribute("id", "food-description")
  description.textContent = 'a list of our irresistable dishes'

  food.appendChild(description)

  return food;
}

function loadfood() {
  const main = document.getElementById("main-container");
  main.textContent = "";
  main.appendChild(createFood());
}

export default loadfood;