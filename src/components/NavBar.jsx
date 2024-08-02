import React from 'react'
import { Stack } from "@mui/material"
import { logo } from '../utils/constants'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Stack 
  direction='row' 
  alignItems='center' 
  p={2} 
  sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
  
  <Link to="/" style={ {display: 'flex', alignItems: 'centers'}}>
  <img src={logo} alt='logo' height={45} />
  </Link>
  <SearchBar/>
  </Stack>
)

export default NavBar