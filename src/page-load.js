import freshPastaImage from './images/fresh-pasta.jpg'

function createHeader() {
  const header = document.createElement("header");
  header.setAttribute("id", "header");

  const restaurantName = document.createElement("h1");
  header.setAttribute("id", "restaurant-name");
  restaurantName.textContent = "flour and grape";

  header.appendChild(restaurantName);

  return header;
}

function createMainContainer() {
  const mainContainer = document.createElement("main");
  mainContainer.setAttribute("id", "main-container");

  const description = document.createElement("p");
  description.setAttribute("id", "description")
  description.textContent = 'made with love and passion'

  const mainImage = new Image();
  mainImage.setAttribute("id", "main-image")
  mainImage.src = freshPastaImage;

  mainContainer.appendChild(description)
  mainContainer.appendChild(mainImage);

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