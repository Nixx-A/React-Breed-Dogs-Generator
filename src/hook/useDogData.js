import { useState } from "react";
import { callBreedDog } from '../Services/callBreedDog'

export function useDogData() {
  const [beerdUrl, setBeerdUrl] = useState('https://images.dog.ceo/breeds/affenpinscher/n02110627_2748.jpg')
  const [loading, setLoading] = useState(false)


  const getBreed = async(beerdChoosed) => {
    try {
      setLoading(true)
      const beerdType = await callBreedDog(beerdChoosed)
      setBeerdUrl(beerdType)
    } catch(e) {
      throw new Error(e)
    } finally {
      setLoading(false)
    }
  }

  return { getBreed, beerdUrl, loading }

}