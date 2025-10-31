const container = document.getElementById("user-container");
const reloadBtn = document.getElementById("reload");

async function fetchUsers() {
  container.innerHTML = "<p>Loading users...</p>";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const users = await res.json();
    displayUsers(users);
  } catch (error) {
    container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  container.innerHTML = "";
  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    container.appendChild(card);
  });
}

reloadBtn.addEventListener("click", fetchUsers);
window.addEventListener("load", fetchUsers);
