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
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'

const Cart = () => {
    const state1 = useSelector((state) => state.HandleCart);
    const [amount, setAmount] = useState(0);
    const name = localStorage.getItem('name');
    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < state1.length; i++) {
            sum += state1[i].price * state1[i].qty;
        }
        setAmount(sum);


    }, [state1])
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
    let OrderHandler = async () => {
        let cartItems = [];
        for (let i in state1) {
            cartItems.push(state1[i]);
        }
        console.log(cartItems);
        let Total = amount;
        await axios.post(`${process.env.REACT_APP_API_URL}/cart`, { cartItems, Total, Id })
            .then((res) => {
                console.log(res)
                notify()

            })
            .catch((err) => {
                console.log(err)
                notifyErr();
            })
    }
    const [loader, setloader] = useState(false);
    const GetBill = async () => {
        const printdoc = document.querySelector('.totallist');
        setloader(true);
        await html2canvas(printdoc).then((canvas) => {
            const img = canvas.toDataURL('img/png')
            const doc = new jspdf('landscape', 'in', [2,6]);
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(img, 'PNG', 0, 0, componentWidth, componentHeight);
            setloader(false);
            doc.save('Bill.pdf');
            console.log("pdf generated");
        })
    }
    //For Email   
    const mailHandler = async () => {
        let email = localStorage.getItem('email');
        console.log(amount)
        await axios.post(`${process.env.REACT_APP_API_URL}/cart/mail`, { email, amount })
            .then(() => { console.log('Order successful and send mail') })
            .catch((err) => { console.log(err) })
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
                <div className="Bill-div">
                    {
                        amount === 0 ? (<img className="empty-cart" src="/Photos/cart.jpg" style={{ width: "500px" }} alt="" />)
                            : (<div className="totallist mx-auto text-center">
                                
                                <h3><strong>Name : {name}</strong></h3>
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

                            </div>
                            )
                    }
                </div>

                {
                    amount === 0 ? " " : (
                        <div className="paybtn-div">
                            <button className="paybtn" onClick={() => {OrderHandler();} }>Place Order</button>

                            <button onClick={GetBill} className="paybtn" disabled={!(loader === false)} >
                                {loader ?
                                    (<span>Downloading....</span>)
                                    : (<span>Download Bill</span>)
                                }
                            </button>
                        </div>
                    )
                }
            </main>
            <ToastContainer />
        </>
    )
}
export default Cart;