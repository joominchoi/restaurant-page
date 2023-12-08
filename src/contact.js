function createContact() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");

  const description = document.createElement("p");
  description.classList.add('description');
  description.textContent = 'how to reach us'

  contact.appendChild(description)

  return contact;
}

function loadContact() {
  const main = document.getElementById("main-container");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;