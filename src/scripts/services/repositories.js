import { baseUrl, quantityToShow } from '../variable.js'

async function getRepositories(userName) {
  const response = await fetch(`${baseUrl}/${userName}/repos?${quantityToShow}`)
  return await response.json()
}

export { getRepositories }
