function createFood() {
  const food = document.createElement("div");
  food.setAttribute("id", "food");

  const description = document.createElement("p");
  description.classList.add('description');
  description.textContent = 'a list of our irresistable dishes';

  const smallDishes = document.createElement("p");
  smallDishes.classList.add('category')
  smallDishes.textContent = 'small dishes';

  const houseSalad = document.createElement("p");
  houseSalad.textContent = 'house salad';

  const beefCarpaccio = document.createElement("p");
  beefCarpaccio.textContent = 'beef carpaccio';

  const flounderCarpaccio = document.createElement("p");
  flounderCarpaccio.textContent = 'flounder carpaccio';

  const truffledArancini = document.createElement("p");
  truffledArancini.textContent = 'truffled arancini';

  const pasta = document.createElement("p");
  pasta.classList.add('category')
  pasta.textContent = 'pasta';

  const corianderPasta = document.createElement("p");
  corianderPasta.textContent = 'cocunut cream spaghetti with chicken, coriander and cucumber';

  const squidPasta = document.createElement("p");
  squidPasta.textContent = 'brown butter rigatoni with squid, romaine lettuce and assorted nuts';

  const uniPasta = document.createElement("p");
  uniPasta.textContent = 'uni pasta';

  const mackerelChitarra = document.createElement("p");
  mackerelChitarra.textContent = 'mackerel chitarra with olives, basil and capers';

  food.appendChild(description)
  food.appendChild(smallDishes)
  food.appendChild(houseSalad)
  food.appendChild(beefCarpaccio)
  food.appendChild(flounderCarpaccio)
  food.appendChild(truffledArancini)
  food.appendChild(pasta)
  food.appendChild(corianderPasta)
  food.appendChild(squidPasta)
  food.appendChild(uniPasta)
  food.appendChild(mackerelChitarra)

  return food;
}

function loadfood() {
  const main = document.getElementById("main-container");
  main.textContent = "";
  main.appendChild(createFood());
}

export default loadfood;