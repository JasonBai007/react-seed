
export function reducerList(state={
    tData:[]   
},action){
    switch(action.type){
        case "LIST_REQUESTLIST":
            // console.log(action.payload); // 返回 数组
            return Object.assign({},state,{
                tData:action.payload
            });
        case "LIST_DESTORYLIST":
            return Object.assign({},state,{
                tData:[]  
            });
        default :
            return state;
    }
}