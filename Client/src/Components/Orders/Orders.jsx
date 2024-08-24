import { useEffect, useState } from "react";
import Navbar from "../Navbar/NavbarResp";
import axios from "axios";
import OrderCard from "../../UI/OrderCard/OrderCard"

const Orders = ()=>{
    const [orders,setOrders] = useState([]);
    const Id = localStorage.getItem('id').toString();

    
    const getOrders = async()=>{
        await axios.post(`${process.env.REACT_APP_API_URL}/orders`,{Id})
        .then((res)=>{
            // console.log(res);
            setOrders(res.data.Orders);
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getOrders();
    },[])
    return(
        <>
            <Navbar />
            <main>
            {orders.length !== 0 && <h1 className="heading">Your Orders</h1>}
            
            <div style={{display:"grid",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                    {
                        (orders.length === 0 )
                        ? (<a href="/product"><img className="empty-cart" src="/Photos/orderNow.png" style={{width:"400px" ,height:"400px"}} alt="img" /></a>)
                        : orders.map((item)=> <div className="order">
                            <OrderCard OrderDetail={item}/>
                            </div>
                        )
                    }
            </div>
                    
            </main>
        </>
    )
}
export default Orders;