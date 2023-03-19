import React, { useEffect, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = ({handleSearchPattern}) => {
  const [searchPattern, setSearchPattern] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleKeyPressed = (event) => {
    const value = event.target.value;
    setSearchPattern(value);
    handleSearchPattern(value);
  }

  return (
    <div className='md:my-10 mx-5 md:mx-28 py-3 shadow-lg rounded-full border-2 border-text3 flex flex-row justify-start items-center'>
      <BsSearch className='fill-text4 text-lg ml-8'/>
      <input ref={inputRef} onChange={handleKeyPressed} value={searchPattern} type="text" placeholder='Search Restaurant here..' className='focus:outline-none focus:ring-0 w-full mx-3 p-2 border-transparent text-lg' />
    </div>
  )
}

export default SearchBar