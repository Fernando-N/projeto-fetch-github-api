import { baseUrl, quantityToShow } from '../variable.js'

async function getEvents(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/events?${quantityToShow}`
  )

  return await response.json()
}

export { getEvents }
