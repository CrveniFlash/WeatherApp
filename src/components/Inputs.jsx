import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';

export default function Inputs({ setInputData }) {
    const [userInput, setUserInput] = useState("")

    const handleInputData = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmitData = (e) => {
        e.preventDefault()
        setInputData({ city: `${userInput}` })
        
    }

    return (
        <form value="" onSubmit={handleSubmitData} className='flex justify-center items-center space-x-2 text-white my-8' action="submit">
            <div className='flex  space-x-1 items-center'>
                <input  onChange={handleInputData} className='outline-none bg-transparent border-gray-500 border rounded p-1 px-3 capitalize' type="text" />
                <div className='mb-1'>
                    <button > <SearchIcon className='text-white' /> </button>
                    <span className='text-white text-xl'>|</span>
                    <button> <LocationOnIcon className='text-white' /> </button>
                </div>
            </div>
            <h1> - </h1>
            <div className='text-xl space-x-1'>
                <span>°C</span>
                <span>|</span>
                <span>°F</span>
            </div>
        </form>
    )
}