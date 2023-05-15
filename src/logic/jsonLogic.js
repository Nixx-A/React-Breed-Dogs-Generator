import breds from '../Json/breds.json'

export function jsonLogic() {
  let arrSubBreeds = []
  let concatBreeds = []

  for (const [breed, subBreeds] of Object.entries(breds)) {
    if (subBreeds.length === 1) {
      concatBreeds.push(`${breed}/${subBreeds}`)
    } else if (subBreeds.length > 1) {
      arrSubBreeds.push(subBreeds.map(subBreed => `${breed}/${subBreed}`))
    } else {
      concatBreeds.push(breed)
    }
  }

  let result = [];
  arrSubBreeds.forEach(array => {
    result = result.concat(array);
  });


  const allDogs = concatBreeds.concat(result)

  return allDogs
}

