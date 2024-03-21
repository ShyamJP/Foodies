import React, { useEffect, useState } from "react";
import "./cart.css"
import Navbar from "../Navbar/NavbarResp";
import { useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from "react-redux";
import { addcart, delcart } from "../../Redux/Action/index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const Cart = () => {
    const state1 = useSelector((state) => state.HandleCart);
    const [amount, setAmount] = useState(0);
    
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < state1.length; i++) {
            sum += state1[i].price * state1[i].qty;
        }
        setAmount(sum);

        
    },[state1])
    // Add and Delete item
    const dispach = useDispatch();
    const addItems = (d) => {
        dispach(addcart(d));
    }
    const delItems = (d) => {
        dispach(delcart(d));
    }

    // react notify ✔️👍 Payment Compleated successfully!
    const notify = () => toast.success('🛒 Your Order placed Successfully !🛒', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const notifyErr = () => toast.error('No item is found', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        }); 
    const Id = localStorage.getItem('id'); 
    // Placed Order
    let OrderHandler = async ()=>{
        let cartItems = [];
        for(let i in state1){
            cartItems.push(state1[i]);
        }
        console.log(cartItems);
        let Total = amount;
        await axios.post('http://localhost:3001/cart',{cartItems,Total ,Id})
        .then((res)=>{
            console.log(res) 
            notify()})
        .catch((err)=> {
            console.log(err)
            notifyErr();
        })
    }
        
     //For Email   
    const mailHandler = async() =>{
        let email = localStorage.getItem('email');
        console.log(amount)
        await axios.post('http://localhost:3001/cart/mail',{email,amount})
        .then(()=>{console.log('Order successful and send mail')})
        .catch((err)=>{console.log(err)})
    }    


    return (
        <>
            <Navbar />

            <main>
                <div className="cartCard-container" >
                    {
                        state1.map(p =>
                            <div className="cartCards mx-auto" key={p.id}>
                                <img src={p.url} alt={p.name} />
                                <h3>{p.name}</h3>
                                <h5>${p.price}</h5>
                                <span>
                                    <IconButton aria-label="delete" size="small">
                                        <RemoveIcon className="icon" onClick={() => delItems(p)} />
                                    </IconButton>
                                    <h3>{p.qty}</h3>
                                    <IconButton aria-label="delete" size="small">
                                        <AddIcon className="icon" onClick={() => addItems(p)} />
                                    </IconButton>
                                </span>
                            </div>)
                    }
                </div>
                {
                    amount === 0 ? (<img className="empty-cart" src="/Photos/cart.jpg" style={{width:"500px"}} alt="" />)
                    :(<div className="totallist mx-auto text-center">
                    <h1>Total Bill</h1>
                    {
                        state1.map(p =>
                            <div className="totalCards">
                                <h5>{p.name} x {p.qty}</h5>
                                <h5>${p.price * p.qty}</h5>
                            </div>
                        )
                    }
                    <h5 style={{ fontWeight: "800", textAlign: "right" }}>Total Amount = ${amount}</h5>
                    {/* <button className="paybtn" onClick={() => { amount>0 ? (notify()) : notifyErr() } }>Checkout And Pay</button> */}
                    <button className="paybtn" onClick={() => OrderHandler()}>Checkout And Pay</button>
                    {/* <button onClick={()=> paymentHandler()}>Mail</button> */}
                </div>)
                }
            </main>
            <ToastContainer />
        </>
    )
}
export default Cart;