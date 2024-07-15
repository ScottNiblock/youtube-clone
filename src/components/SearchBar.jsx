import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const inputRef = React.useRef(null);
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('');
      //blur input field to hide keyboard
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  }
  return (
   <Paper
   component='form'
   onSubmit={handleSubmit}
   sx={{
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl:2,
    boxShadow: 'none',
    mr: {sm: 5} //Only sets margin right of 5 on small devices
   }}
   >
<input
ref={inputRef}
className='search-bar'
placeholder='Search...'
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}

/>
<IconButton type='submit' sx={{p:'10px', color: 'red'}}>
    <Search/>
</IconButton>
   </Paper>
  )
}


export default SearchBar
