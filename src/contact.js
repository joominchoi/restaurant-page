function createContact() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");

  const description = document.createElement("p");
  description.classList.add('description');
  description.textContent = 'how to reach us'

  const addressTitle = document.createElement("p");
  addressTitle.classList.add('category')
  addressTitle.textContent = 'address';

  const address = document.createElement("p");
  address.textContent = '111 Pasta Street, Olive Town, Italy, 111-1111';

  const phoneTitle = document.createElement("p");
  phoneTitle.classList.add('category')
  phoneTitle.textContent = 'phone';

  const phone = document.createElement("p");
  phone.textContent = '111-1111-1111';

  const emailTitle = document.createElement("p");
  emailTitle.classList.add('category')
  emailTitle.textContent = 'email';

  const email = document.createElement("p");
  email.textContent = 'flour@grape.com';

  contact.appendChild(description)
  contact.appendChild(addressTitle)
  contact.appendChild(address)
  contact.appendChild(phoneTitle)
  contact.appendChild(phone)
  contact.appendChild(emailTitle)
  contact.appendChild(email)

  return contact;
}

function loadContact() {
  const main = document.getElementById("main-container");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;