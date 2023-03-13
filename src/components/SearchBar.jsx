import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = ({handleSearchPattern}) => {
  const [searchPattern, setSearchPattern] = useState('');

  const handleKeyPressed = (event) => {
    const value = event.target.value;
    setSearchPattern(value);
    handleSearchPattern(value);
  }

  return (
    <div className='my-10 mx-28 py-3 shadow-lg rounded-full border-2 border-text3 flex flex-row justify-start items-center'>
      <BsSearch className='fill-text4 text-lg ml-8'/>
      <input onChange={handleKeyPressed} value={searchPattern} type="text" placeholder='Search Restaurant here..' className='focus:outline-none focus:ring-0 w-full mx-3 p-2 border-transparent text-lg' />
    </div>
  )
}

export default SearchBar