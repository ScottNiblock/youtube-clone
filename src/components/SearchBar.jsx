import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const resetZoom = () =>{
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport){
      viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
      setTimeout(() => {
        viewport.content = "width=device-width, initial-scale=1.0";
      }, 500);
  }
}

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('');
      resetZoom();
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
