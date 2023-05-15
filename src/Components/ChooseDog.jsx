import { useState } from 'react'
import { jsonLogic } from '../logic/jsonLogic'
import { useDogData } from '../hook/useDogData'

export function ChooseDog() {
  const [selectedOption, setSelectedOption] = useState('affenpinscher')

  const { getBreed, beerdUrl } = useDogData()
  const listBreeds = jsonLogic()

  const handleChange = e => {
    setSelectedOption(e.target.value)
    console.log(e.target.value)
  }

  const handleClick = () => {
    getBreed(selectedOption)
  }

  return (
    <>
      <select
        value={selectedOption}
        onChange={handleChange}
        className='w-32 h-8 rounded-sm'
        name='breed'
        id='breed'>
        {listBreeds.map((breed, index) => (
          <option id={index} key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button
        onClick={handleClick}
        className='inline border-2 rounded-md bg-purple-600 text-white hover:bg-purple-800 duration-200 p-1 w-28 mb-4 font-Ysabeau'>
        Generate
      </button>
      <div className='flex h-full w-full justify-center'>
      <img className='absolute w-60 h-72 md:w-96 md:h-72' src={beerdUrl} alt={selectedOption} />
      </div>
    </>
  )
}
