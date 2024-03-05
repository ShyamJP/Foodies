export const addcart = (item)=>{
    return{
        type:"ADDITEM",
        payload: item
    }
}

export const delcart = (item)=>{
    return{
        type:"DELETEITEM",
        payload:item
    }
}

export const getorder = (item)=>{
    return{
        type:"GETORDERS",
        payload: item
    }
}

