import React from 'react'
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {Link} from "react-router-dom"
import pic from "../assets/images/user.jpg"
function createData(key, value) {
    return { key, value };
}

const rows = [
    createData('Name', 'Mantosh Kumar Yadav'), //Nitin Chauhan
    createData('User Name','Mantosh Kumar'), // Nitin
    createData('Email', 'kyamantoshkumar@gmail.com'), //vishankchauhan@gmail.com
    createData('Phone', '8877249791'), //9873848046
    createData('Address Line 1', "House Number 82K"), // House Number 82K
    createData('Address Line 2', "Street Number 5"), // Street Number 5
    createData('Address Line 3', "Village Rahi Bhitthi"), //Village Mahawatpur
    createData('PIN', "121002"), // 121002
    createData('City', "Faridabad"), //Faridabad
    createData('State', "Haryana"), //Haryana
]; 
export default function Profile() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12} >
                    <img src={pic} className="w-100" height="465px" />
                </Grid>
                <Grid item md={6} xs={12} >
                    <h5 className='background text-light text-center p-2'>User Profile Section</h5>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: '100%' }} aria-label="simple table" className="table table-striped table-hover">
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.key}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.key}
                                        </TableCell>
                                        <TableCell align="left">{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Link to="#" className='btn background text-light text-center w-100 btn-sm'>Update Profile</Link>
                </Grid>
            </Grid>
        </>
    )
}
