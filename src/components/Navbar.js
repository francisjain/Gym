import { IconButton, InputBase, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar({ sendDataToParent }) {
  
  const [data, setData] = useState("")
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) { handleShow(true) }
      else { handleShow(false) }
    });
    return () => { window.removeEventListener("scroll",null) }
  }, [])


console.log( sendDataToParent );
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_log"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo" />

      {/* <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"
        alt="Netflix Logo" /> */}
        <div> 
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,float:'right' ,mr:'50px' ,mb:'2px'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Gym"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={data}
        onChange={e =>  sendDataToParent(e.target.value)}
      />
      
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
        </div>
    </div>
  )
}

export default Navbar