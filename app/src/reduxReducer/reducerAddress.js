
export function reducerAddress(state={
    address:""  
},action){
    switch(action.type){
        case "ADDRESS_CHANGE":
            return Object.assign({},state,{
                address:action.payload
            });
        default :
            return state;
    }
}