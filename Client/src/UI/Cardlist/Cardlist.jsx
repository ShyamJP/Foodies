import React from "react";
import Card1 from "../Card1/Card1";
import "./Cardlist.css"
const Cardlist = (props) =>{
    return(
        <>
            <h1 className="product_heading">{props.category}</h1>
            <div className="Cardlist">
            {   (props.data) ?
                props.data.map((p)=>
                    // <Card1 title={p.name} desc={p.desc} url={p.url} rating={p.rating} price={p.price}/>
                    <Card1  data={p}/>
                )
                : " "
            }
            </div>
        </>
    )
}
export default Cardlist;