import { useEffect, useState } from "react";
import Navbar from "../Navbar/NavbarResp";
import axios from "axios";

const Orders = ()=>{
    const [orders,setOrders] = useState([]);
    const Id = localStorage.getItem('id').toString();

    
    const getOrders = async()=>{
        await axios.post('http://localhost:3001/orders',{Id})
        .then((res)=>{
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
            <h1 className="heading">Your Orders</h1>
            
            <div>
                <ul>
                    {
                        (orders === null )
                        ? (<h2>No Orders available</h2>)
                        : orders.map((item)=> <div>
                            {item.Date} 
                            <p>{item.Total}</p>
                            {
                                (item.Products.map(i =>
                                            <div className="mx-auto" key={i._id}>
                                                <h3>{i.name} x {i.qty}</h3>
                                            </div>
                                    ))
                            }
                            </div>
                        )
                    }
                </ul>
            </div>

            </main>
        </>
    )
}
export default Orders;