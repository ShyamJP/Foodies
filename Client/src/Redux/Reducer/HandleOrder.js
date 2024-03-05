import Products from "../../Data";

let order = [];

const HandleOrder = (state= order,action)=>{
    let orderList = action.payload;
    console.log(orderList);
    switch(action.type){
        case "GETORDERS" :
                        for(let i=0; i<orderList.length(); i++){
                            let item = Products.find((i)=> i.id === orderList[i])
                            if(item)
                                console.log(state);
                        }
                        //   orderList.map((x)=>{
                        //     console.log(x);
                        //       let item = Products.find((i)=> i.id === x)
                        //       if(item)
                        //       state += item;
                        //   })    
                        //   console.log(state);
                          return state;
                          break;
        default:return order;
                break;
    }
}
export default HandleOrder;