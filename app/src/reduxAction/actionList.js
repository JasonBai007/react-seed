import Mock from 'mockjs';

// 进入时请求数据
export function action_list_requestList(){
    let debug = 1;
    if (debug) {
        Mock.mock(/getTableData/,{
            "data|121-140": [{
                "key|+1":1,
                "name":"@name",
                "sex|1":["男","女"],
                "age":"@integer(22, 60)",
                "email":"@email"
            }]
        })    
    }
    return (dispatch,getState) => {
        $.ajax({
            url:'getTableData'
        })
        .done((res) => {
            // console.log(res);
            let data = JSON.parse(res);
            dispatch({
                type:'LIST_REQUESTLIST',
                payload:data.data
            })
        })
    }
}


// 离开时清空数据
export function action_list_destoryList(){
    return {
        type:"LIST_DESTORYLIST"
    }
}