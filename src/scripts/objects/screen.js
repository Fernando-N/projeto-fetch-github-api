const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user) {
    this.userProfile.innerHTML = `
      <div class="info">
        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
        <div class="data">
          <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
          <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
        </div>
        <div class="follow">
          <div class="followers">
            <i class="fa-solid fa-user-group">Seguidores</i>
            <p>${user.followers ?? 'Não possui seguidores'}</p>
          </div>
          <div class="following">
          <i class="fa-solid fa-user-group">Seguindo</i>
          <p>${user.following ?? 'Não segue ninguém'}</p>
        </div>
        </div>
      </div>
    `

    let repositoriesItens = ''
    user.repositories.forEach(repo => {
      repositoriesItens += `
        <li>
          <a href="${repo.html_url}" target="_blank">
            <p>${repo.name}</p>
            <i class="fa-solid fa-code-fork"> ${repo.forks_count} </i>
            <i class="fa-solid fa-star"> ${repo.stargazers_count}</i>
            <i class="fa-solid fa-eye"> ${repo.watchers_count} </i>
            <i class="fa-solid fa-file-code"> ${
              repo.language ?? 'Sem linguagem'
            }</i>
          </a>
        </li>`
    })

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
      <div class="repositories section">
        <h2>Repositórios</h2>
        <ul>${repositoriesItens}</ul>
        </div>
    `
    }

    let eventsItens = ''
    user.events.forEach(event => {
      if (event.type === 'PushEvent') {
        eventsItens += `<li><p><span>${event.repo.name}</span>: ${event.payload.commits[0].message}</p></li>`
      } else {
        eventsItens += `<li><p>Nenhuma atividade recente</p></li>`
      }
    })

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `
        <div class="events section">
          <h2>Atividades</h2>
          <ul>${eventsItens}</ul>
        </div>
      `
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
  }
}

export { screen }
