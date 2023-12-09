function createDrinks() {
  const drinks = document.createElement("div");
  drinks.setAttribute("id", "drinks");

  const description = document.createElement("p");
  description.classList.add('description');
  description.textContent = 'a list of our drinks'

  const wine = document.createElement("p");
  wine.classList.add('category')
  wine.textContent = 'wine';

  const houseRed = document.createElement("p");
  houseRed.textContent = 'house red wine';

  const houseWhite = document.createElement("p");
  houseWhite.textContent = 'house white wine';

  const prosecco = document.createElement("p");
  prosecco.textContent = 'prosecco';

  const beer = document.createElement("p");
  beer.classList.add('category')
  beer.textContent = 'beer';

  const peroni = document.createElement("p");
  peroni.textContent = 'peroni';

  const moretti = document.createElement("p");
  moretti.textContent = 'moretti';

  const softDrinks = document.createElement("p");
  softDrinks.classList.add('category')
  softDrinks.textContent = 'soft drinks';

  const cocaCola = document.createElement("p");
  cocaCola.textContent = 'coca cola';

  const cocaColaZero = document.createElement("p");
  cocaColaZero.textContent = 'coca cola zero';
  
  const sanPellegrinoLimonata = document.createElement("p");
  sanPellegrinoLimonata.textContent = 'san pellegrino limonata';

  const sanPellegrinoSparklingWater = document.createElement("p");
  sanPellegrinoSparklingWater.textContent = 'san pellegrino sparkling water';

  drinks.appendChild(description)
  drinks.appendChild(wine)
  drinks.appendChild(houseRed)
  drinks.appendChild(houseWhite)
  drinks.appendChild(prosecco)
  drinks.appendChild(beer)
  drinks.appendChild(peroni)
  drinks.appendChild(moretti)
  drinks.appendChild(softDrinks)
  drinks.appendChild(cocaCola)
  drinks.appendChild(cocaColaZero)
  drinks.appendChild(sanPellegrinoLimonata)
  drinks.appendChild(sanPellegrinoSparklingWater)

  return drinks;
}

function loaddrinks() {
  const main = document.getElementById("main-container");
  main.textContent = "";
  main.appendChild(createDrinks());
}

export default loaddrinks;