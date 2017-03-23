import Mock from 'mockjs';

// 进入时请求数据
export function action_home_requestList(){
    let debug = 1;
    if (debug) {
        Mock.mock(/getProfile/,{
            "idx|4":[{
                "key|1":['紫外线指数','穿衣指数','感冒指数','洗车指数'],
                "value|1-7":"★"
            }],
            'line': [{
		        name: '成交',
		        type: 'line',
		        smooth: true,
		        "data|7": ["@integer(0,100)"]
		    },
		    {
		        name: '意向',
		        type: 'line',
		        smooth: true,
		        "data|7": ["@integer(0,100)"]
		    }]        
        })    
    }
    return (dispatch,getState) => {
        $.ajax({
            url:'getProfile'
        })
        .done((res) => {
            let data = JSON.parse(res);
            dispatch({
                type:'HOME_REQUESTLIST',
                payload:{
                    idx:data.idx,
                    lineData:data.line
                }
            })
        })
    }
}

// 离开时清空数据
export function action_home_destoryList(){
    return {
        type:"HOME_DESTORYLIST"
    }
}