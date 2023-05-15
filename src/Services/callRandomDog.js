export function callRandomDog() {

  const API_URL = 'https://dog.ceo/api/breeds/image/random'

  fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data))
}