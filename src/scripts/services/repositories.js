import { baseUrl, repositoriesQuantity } from '/src/scripts/variable.js '

async function repos(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`
  )
  return await response.json()
}

export { repos }
