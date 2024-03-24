import { React } from "react";
import NavbarFront from "../NavbarFront/NavbarResp"
import './Front.css'

const Front = () => {
    return (
        <>
            <NavbarFront/>
            <div className="main_div">
            <div className="front1">
                <div className="div1"><img src="/Photos/pizzaIcon.png" alt="" /></div>
                <div className="div2">
                    <h1>Welcome to the FOODIES !</h1>
                    <h3>Enjoy Our Delicious Food</h3>
                </div>
            </div>
            </div>
        </>
    )
}

export default Front;