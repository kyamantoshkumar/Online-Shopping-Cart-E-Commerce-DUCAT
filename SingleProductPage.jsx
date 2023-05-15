import React, {useContext} from 'react';
import {useParams} from "react-router-dom"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {ProductContext} from "../Store/ProductContext"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Shop from './Shop';


export default function SingleProductPage() {
  var product = useContext(ProductContext)
  var {_id} = useParams()
  product = product.find((item)=>item.id===parseInt(_id))
  console.log(product)
  var items = [
    {
      pic: product.pic1
    },
    {
      pic: product.pic2
    },
    {
      pic: product.pic3
    },
    {
      pic: product.pic4
    }
  
  ]
  function Item(props) {
    return (
        <Paper>
            {/* <img src={props.item.pic} width={"100%"} height={"500px"} /> */}
            <img src={props.item.pic} width={"100%"} height={"500px"} alt="" />
        </Paper>
    )
  }
  
  return (
    <div className='container-fluid'>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
                <Carousel>
                    {
                        product.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
                <Shop/>
        </Grid>
        <Grid item md={6} xs={12}>

        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
