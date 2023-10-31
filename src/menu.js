function createMenu() {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  const description = document.createElement("p");
  description.setAttribute("id", "menu-description")
  description.textContent = 'a list of our irresistable dishes'

  menu.appendChild(description)

  return menu;
}

function loadMenu() {
  const main = document.getElementById("main-container");
  main.appendChild(createMenu());
}

export default loadMenu;