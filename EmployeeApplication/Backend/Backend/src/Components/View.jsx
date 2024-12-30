import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const View = () => {
  var[user,setuser] =useState([])
  var navigate=useNavigate()
 
  useEffect(() =>{
  axios.get("http://localhost:3004/view")
  .then((response) => {
    setuser(response.data)
  }
)
  })
const delvalue=(id) =>{
  
  console.log(id)
  axios.delete("http://localhost:3004/remove/"+id)
  .then((res) => {
    alert(res.data.message)
    window.location.reload()

}
)
}
const updatevalue=(val) =>{
  navigate('/Addemp',{state:{val}})

 }



  return (
    <div>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow> 
                <TableCell>Name</TableCell>
                <TableCell >Age</TableCell>
                <TableCell >Department</TableCell>
                <TableCell >Salary</TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                    
            </TableRow>
            </TableHead>
        <TableBody>
          {user.map((val) => {
            return(<TableRow> 
              <TableCell>{val.Name}</TableCell>
              <TableCell >{val.Age}</TableCell>
              <TableCell >{val.Dept}</TableCell>
              <TableCell >{val.Sal}</TableCell>
              <TableCell ><Button variant='contained' color='success' onClick={()=> {delvalue(val._id)}}>DELETE</Button> </TableCell>
              <TableCell ><Button variant='contained' color='success' onClick={()=> {updatevalue(val)}}>UPDATE</Button> </TableCell>   
          </TableRow>


            )})}
            
        </TableBody>
        </Table>
                
                   
        </TableContainer>
    </div>
  )
}

export default View