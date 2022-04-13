import { baseUrl } from '/src/scripts/variable.js '

async function user(userName) {
  const response = await fetch(`${baseUrl}/${userName}`)
  return await response.json()
}

export { user }
