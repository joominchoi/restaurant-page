import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("id", "header");

  const restaurantName = document.createElement("h1");
  header.setAttribute("id", "restaurant-name");
  restaurantName.textContent = "flour and grape";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    console.log("Home button has been clicked")
    setActiveButton(homeButton)
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    console.log("Menu button has been clicked")
    setActiveButton(menuButton)
    loadMenu();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    console.log("Contact button has been clicked")
    setActiveButton(contactButton)
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".nav-button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}


function createMainContainer() {
  const mainContainer = document.createElement("main");
  mainContainer.setAttribute("id", "main-container");

  return mainContainer;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");

  const creator = document.createElement("p");
  creator.setAttribute("id", "creator");
  creator.textContent = "Created by JooMin Choi";

  footer.append(creator);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMainContainer());
  content.appendChild(createFooter());
}

export default initializeWebsite;