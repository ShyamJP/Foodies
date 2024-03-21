import "./OrderCard.css"
const Card2 = ({ OrderDetail }) => {
    return (<>
        <div className="order-card" key={OrderDetail._id}>
            <ol>
                {OrderDetail.Products.map((item => <li>{item.name} x {item.qty}</li>))}
            </ol>
            <div className="total">
                <h4>Total : {OrderDetail.Total}</h4>
                <h6>Date : {OrderDetail.Date}</h6>
            </div>
        </div>
    </>)
}

export default Card2;