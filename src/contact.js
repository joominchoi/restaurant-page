function createContact() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");

  const description = document.createElement("p");
  description.setAttribute("id", "contact-description")
  description.textContent = 'how to reach us'

  contact.appendChild(description)

  return contact;
}

function loadContact() {
  const main = document.getElementById("main-container");
  main.appendChild(createContact());
}

export default loadContact;