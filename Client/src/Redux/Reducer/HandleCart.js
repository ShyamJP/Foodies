const cart = [];

const HandleCart = (state= cart,action) =>{
    const OrderItem = action.payload;
    switch(action.type){
        case "ADDITEM": 
                        const exist = state.find((x)=> x.id === OrderItem.id);
                        if(exist){
                            return state.map((x)=> x.id === OrderItem.id ? {...x,qty:x.qty+1} : x)
                        }
                        else{
                            return [...state,{...OrderItem,qty:1}] 
                        }
                        break;
        case "DELETEITEM":
                        const exist1 = state.find((x)=> x.id === OrderItem.id);
                        if(exist1.qty === 1){
                            return state.filter((x)=> x.id !== exist1.id)
                        }                
                        else{
                            return state.map((x)=> x.id === OrderItem.id ? {...x,qty:x.qty-1} : x);
                        }
                        break;
        default: 
                        return state 
                               break;              
    }
}

export default HandleCart;