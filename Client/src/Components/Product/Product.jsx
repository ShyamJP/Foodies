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

// main product function
const Product = () => {

  const [product , setProduct] = useState(null);
  const [data, setupdatedata] = useState(null);
  
  const getAllProducts = async()=>{
    await axios.get(`${process.env.REACT_APP_API_URL}/data`)
    .then(result=>{
      setProduct(result.data.result);
      setupdatedata(result.data.result);
    console.log(result);
    })
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    getAllProducts();
  },[])
  
  const Filterdata = (val) => {
    const filtereddata = product.filter((p) => p.category === val)
    setupdatedata(filtereddata);
  }

  const Filterdatabytiming = (val) => {
    let filtereddata;
    if(val === ""){
      filtereddata = product;
    }
    else{
      filtereddata = product.filter((p) => p.timing === val)
    }
    setupdatedata(filtereddata);
  }

  const [state, setState] = React.useState({left: false});

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
        <ListItemButton onClick={() => setupdatedata(product)}> <ListItemText primary="All Products" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("pizza")}><img src='/Photos/pizzaicon.png' style={{width:"30px" , marginRight:"10px"}} alt='imag'/>  <ListItemText primary="Pizza" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Burger")}><img src='/Photos/burgericon.png' style={{width:"30px" , marginRight:"10px"}} alt='icon' /><ListItemText primary="Burger" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Subway")}><img src='/Photos/subwayicon.png' style={{width:"30px" , marginRight:"10px"}} alt='icon' /><ListItemText primary="Subway" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Panjabi")}><img src='/Photos/dishicon.png' style={{width:"30px" , marginRight:"10px"}} alt='icon' /><ListItemText primary="Panjabi" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Gujarati")}><img src='/Photos/dishicon.png' style={{width:"30px" , marginRight:"10px"}} alt='icon' /><ListItemText primary="Gujarati" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("Sandwich")}><img src='/Photos/sandwhichicon.png' style={{width:"30px" , marginRight:"10px"}} alt='icon' /><ListItemText primary="Sandwich" /></ListItemButton>
        <ListItemButton onClick={() => Filterdata("SouthIndian")}><img src='/Photos/southindianicon.png' style={{width:"30px" , marginRight:"10px"}} alt='icon' /><ListItemText primary="South Indian" /></ListItemButton>
      </List>
      <Divider />
      <List>
        {/* <ListItemButton><ListItemIcon></ListItemIcon><ListItemText primary="Special Menue" /></ListItemButton> */}
      </List>
    </Box>
  );

  return (
    <>
      <Navbar />

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
          {product && <Filter  products= {product}/>}


        {/* <Display /> */}
        { data ===  null ? (console.log(false)) : (<Cardlist data={data} />)}
      </main>
      <Footer />
    </>
  );
}

export default Product;