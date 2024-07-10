const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class= "info">       
              <img src="${user.avatarUrl}" alt="foto de usuário"/>
                <div class= "data">
              <h1>${user.name ?? "O usuário não possui um nome 🥲"}</h1>
              <p>${user.bio ?? "O usuário não possui bio definida 🥲"}</p>
            
              <div class="seguidores"> 
                  <p>Seguidores: <span>${user.followers}</span></p>
                  <p>Seguindo: <span>${user.following}</span></p>
                 </div>
             </div>`;

    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a><span>🍴${repo.forks} | 🌟${repo.stargazers_count} | 👀${repo.watchers} | 💻${repo.language}</span></li>`)
    );
    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
                </div>`;
    }

    let eventItens = "";

    user.events.forEach((event) => {
      if (event.payload.commits && event.payload.commits.length > 0) {
        event.payload.commits.forEach((commit) => {
          const commitMessage =
            commit.message || "Não tem commits para mostrar";
          eventItens += `<div class="eventos">
                <li>${event.repo.name} - ${commitMessage}</li>
            </div>`;
        });
      } else {
        eventItens += `<div class="eventos">
            <li>${event.repo.name} - Sem commits para mostrar</li>
        </div>`;
      }
    });

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Eventos</h2>
                                       ${eventItens} 
                                    </div>`;
    }
  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3> Usuário não encontrado</h3>";
  },
};
export { screen };
