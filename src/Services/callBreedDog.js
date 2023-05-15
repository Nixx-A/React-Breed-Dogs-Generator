export const callBreedDog = async (data) => {

  const API_URL = `https://dog.ceo/api/breed/${data}/images/random`

  const response = await fetch(API_URL)
  const result = await response.json()

  const message = result.message
  console.log(message)
  return message
}