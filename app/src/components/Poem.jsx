import React from 'react';
import 'animate.css/source/_base.css'
import 'animate.css/source/bouncing_entrances/bounceInLeft.css'
import 'animate.css/source/bouncing_entrances/bounceInRight.css'

export const Poem = () => {
    const titleStyle = {
        padding:'5px 20px',
        color:'#5C6B77',
        marginTop: 100,
        marginBottom: 10,
        borderRadius:3,
        textAlign:'center',
        fontSize:20
    };        
    return (
        <div style={titleStyle} >                    
            <p className="animated bounceInLeft">写字楼里写字间，写字间里程序员；</p>
            <p className="animated bounceInRight">程序人员写程序，又拿程序换酒钱。</p>
            <p className="animated bounceInLeft">酒醒只在网上坐，酒醉还来网下眠；</p>
            <p className="animated bounceInRight">酒醉酒醒日复日，网上网下年复年。</p>
            <p className="animated bounceInLeft">但愿老死电脑间，不愿鞠躬老板前；</p>
            <p className="animated bounceInRight">奔驰宝马贵者趣，公交自行程序员。</p>
            <p className="animated bounceInLeft">别人笑我忒疯癫，我笑自己命太贱；</p>
            <p className="animated bounceInRight">不见满街漂亮妹，哪个归得程序员？</p>
        </div>
    )    
    
}
        