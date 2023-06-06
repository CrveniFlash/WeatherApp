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
            <div className='flex  space-x-1 items-center border-gray-500 border rounded'>
                <input  onChange={handleInputData} className='outline-none bg-transparent  p-1 px-3 capitalize' type="text" />
                <div className='mb-1'>
                    <button className='mt-1 mr-2'> <SearchIcon className='text-white' /> </button>
                    
                </div>
            </div>
            
        </form>
    )
}