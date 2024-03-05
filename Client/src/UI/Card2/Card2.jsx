import "./Card2.css"
const Card2 = (props)=>{
    <>
        <div className="card">
                <img src={props.url} alt="" />
                <h3>{props.name}</h3>
                
        </div>
    </>
}

export default Card2;