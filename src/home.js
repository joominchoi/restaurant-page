import pastaImage from './images/fresh-pasta.jpg'

function createHome() {
  const home = document.createElement("div");
  home.setAttribute("id", "home");

  const description = document.createElement("p");
  description.setAttribute("id", "home-description")
  description.textContent = 'made with love and passion'

  const homeImage = new Image();
  homeImage.setAttribute("id", "home-image")
  homeImage.src = pastaImage;

  home.appendChild(description)
  home.appendChild(homeImage);

  return home;
}

function loadHome() {
  const main = document.getElementById("main-container");
  main.appendChild(createHome());
}

export default loadHome;