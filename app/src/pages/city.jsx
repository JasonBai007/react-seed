import React from 'react';

/*页面标题组件，可传参*/
export default class City extends React.Component {
    constructor(props) {
        super(props);       
    }       

    render() {
               
        return (
            <ul>
                <li>北京</li>
                <li>石家庄</li>
                <li>衡水</li>
            </ul>
        )
    }
}
        