import React, { useEffect, useState } from "react";
import "./Card1.css"
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux" //for assine function on order
import { addcart , delcart } from "../../Redux/Action/index"

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card1 = (props) => {
   const notify = () => toast.success('1 item Added', {
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

   const dispach = useDispatch();
   const [item,setItem] = useState([]);


   const addItems = (d) =>{
      dispach(addcart(d));
   }
    return(
    <>
    
    <div class="card1" data-aos="flip-left" key={props.id}>
      {/* {console.log(props.data)} */}
            <div class="card__image">
               <img src={props.data.url} alt="Salad" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>{props.data.name}</h3>
                  <p>{props.data.desc}</p>
               </div>
            </div>
            <div class="card__info--price">
                  <p>$ {props.data.price}</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
               </div>
            <div className="card_add_like">
            {/* Order button */}
            <button className="btnall" 
            onClick={()=> {addItems(props.data); notify();}}>
               Add</button>
            <i class="fa-regular fa-heart fa-xl like"></i>
            {/* <Button text="Add" onClick={()=> addItems(item)}/><i class="fa-regular fa-heart fa-xl"></i> */}
            {/* <button onClick={notify}>Notify!</button> */}
            </div>            
         </div>
         {/* it is for toasttoast */}
         <ToastContainer

/>
    </>
    )
}
export default Card1;