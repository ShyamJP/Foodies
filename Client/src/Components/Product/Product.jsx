import React, { useEffect } from 'react'; import './Product.css'
import Navbar from '../Navbar/NavbarResp';
import Cardlist from '../../UI/Cardlist/Cardlist';
import Products from '../../Data';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Footer from '../../UI/Footer/Footer';
import Filter from './Filter';
import axios from 'axios';
// import TextField from '@mui/material/TextField';

// main product function
const Product = () => {

  const [product , setProduct] = useState(null);
  const [data, setupdatedata] = useState(product);
  
  const getAllProducts = async()=>{
    await axios.get('http://localhost:3001/data')
    .then(result=>{
      setProduct(result.data.result)
    console.log(result);
    })
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    getAllProducts();
  },[])
  const Filterdata = (val) => {
    const filtereddata = Products.filter((p) => p.category === val)
    setupdatedata(filtereddata);
  }

  const Filterdatabytiming = (val) => {
    let filtereddata;
    if(val === ""){
      filtereddata = Products;
    }
    else{
      filtereddata = Products.filter((p) => p.timing === val)
    }
    setupdatedata(filtereddata);
  }

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemButton onClick={() => setupdatedata(Products)}>{/* <ListItemIcon></ListItemIcon> */}<ListItemText primary="All Products" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("pizza")}>{/* <ListItemIcon></ListItemIcon> */}<ListItemText primary="Pizza" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Burger")}>{/* <ListItemIcon></ListItemIcon> */}<ListItemText primary="Burger" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Panjabi")}>{/* <ListItemIcon></ListItemIcon> */}<ListItemText primary="Panjabi" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Gujarati")}>{/* <ListItemIcon></ListItemIcon> */}<ListItemText primary="Gujarati" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Sandwich")}>{/* <ListItemIcon></ListItemIcon> */}<ListItemText primary="Sandwich" /></ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton>{/* <ListItemIcon></ListItemIcon> */}<ListItemText primary="Special Menue" /></ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <Navbar />


      {/* <button onClick={() => setupdatedata(Products)}>All</button>
      <button onClick={() => Filterdata("pizza")}>Pizza</button>
      <button onClick={() => Filterdata("Burger")}>Burger</button> */}

      <main>
        {/* search bar and all filter  */}
        <div className='filter-container'>
          {/* FILTER DROWER */}
          <div>
            <p className='filter-btn'>
            {['filter'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
            </p>
          </div>
          
          {/* RADIO FILTER */}
          <div className=''>
            <div class="radio-inputs">
            <label class="radio">
                <input type="radio" name="radio" />
                <span class="name" onClick={() => Filterdatabytiming("")}>All</span>
              </label>
              <label class="radio">
                <input type="radio" name="radio" />
                <span class="name" onClick={() => Filterdatabytiming("snack")}>Snack</span>
              </label>
              <label class="radio">
                <input type="radio" name="radio" />
                <span class="name" onClick={() => Filterdatabytiming("dinner")}>Dinner</span>
              </label>

              <label class="radio">
                <input type="radio" name="radio" />
                <span class="name" onClick={() => Filterdatabytiming("lunch")}>Lunch</span>
              </label>
            </div>
          </div>

          {/* SEARCH BAR */}
        </div>
          <Filter />


        {/* <Display /> */}
        { product ===  null ? (console.log(false)) : (<Cardlist data={product} />)}
        {/* <Cardlist data={product} /> */}
        {/* {product !== null ? (<Cardlist data={product} />) : ""} */}
      </main>
      <Footer />
    </>
  );
}

export default Product;