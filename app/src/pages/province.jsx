import React from 'react';

/*页面标题组件，可传参*/
export default class Province extends React.Component {
    constructor(props) {
        super(props);       
    }       

    render() {
               
        return (
            <ul>
                <li>北京</li>
                <li>河北</li>
            </ul>
        )
    }
}
        