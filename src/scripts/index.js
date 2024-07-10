import { getUser } from "/src/scripts/services/user.js";
import { getRepositories } from "/src/scripts/services/repositorie.js";
import { getEvents } from "/src/scripts/services/events.js";

import { user } from "/src/scripts/objects/user.js";
import { screen } from "/src/scripts/objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;

  if (validateEmptyInput(userName)) true;
  getUserData(userName);
});

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const inEnterKeyPressed = key === 13;

  if (inEnterKeyPressed) {
    if (validateEmptyInput(userName)) true;
    getUserData(userName);
  }
});

function validateEmptyInput(userName) {
  if (userName.length === 0) {
    alert("preencha o campo para encontrar um usuário no GitHub");
    return true;
  }
}
async function getUserData(userName) {
  const userResponse = await getUser(userName);

  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  const repositoriesResponse = await getRepositories(userName);
  const eventsResponse = await getEvents(userName);

  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  user.setEvents(eventsResponse);
  screen.renderUser(user);
}
