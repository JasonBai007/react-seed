
export function reducerHome(state={
    idx:[],
    lineData:[]     
},action){
    switch(action.type){
        case "HOME_REQUESTLIST":
            // console.log(action.payload); // 返回 数组
            return Object.assign({},state,{
                idx:action.payload.idx,
                lineData:action.payload.lineData
            });
        case "HOME_DESTORYLIST":
            return Object.assign({},state,{
                idx:[],
                lineData:[] 
            });
        default :
            return state;
    }
}