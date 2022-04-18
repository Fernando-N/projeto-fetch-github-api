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
          <i class="fa-solid fa-user-group">Seguidores</i>
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

    let activitiesItens = ''
    user.activities.forEach(act => {
      if (act.type === 'PushEvent') {
        activitiesItens += `<li><p><span>${act.repo.name}</span>: ${act.payload.commits[0].message}</p></li>`
      }
    })
    if (user.activities.length > 0) {
      this.userProfile.innerHTML += `
        <div class="activities section">
          <h2>Atividades</h2>
          <ul>${activitiesItens}</ul>
        </div>
      `
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
  }
}

export { screen }
