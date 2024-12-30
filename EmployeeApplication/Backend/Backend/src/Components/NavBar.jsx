import { AppBar, Button, Toolbar, Typography,  } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar color='secondary'>
            <Toolbar>
               <Typography variant='h6'>Employee Details</Typography>&nbsp;&nbsp;
                <Link to='/Addemp'>
                <Button variant='contained' color='success'>Add</Button> 
                </Link> &nbsp;&nbsp;
                <Link to='/View'>
                <Button variant='contained' color='success'>View</Button> 
                </Link> &nbsp;&nbsp;
            </Toolbar>
        </AppBar><br /><br /><br />
    </div>
  )
}

export default NavBar