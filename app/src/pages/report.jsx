import React from 'react'
import Topbar from '../components/Topbar'
import Title from '../components/Title'
import { Steps,Button,message } from 'antd'

import '../less/report.less'

const Step = Steps.Step;

export default class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }        
    }

    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }
    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }

    render() {        
        return (
            <div>
                <Topbar />
                <Title name="子导航二(步骤)" /> 
                <div className="stepWrap">
                    <Steps current={this.state.current}>
                      <Step title="1"></Step>
                      <Step title="2"></Step>
                      <Step title="3"></Step>
                      <Step title="4"></Step>
                      <Step title="5"></Step>
                      <Step title="6"></Step>
                    </Steps>                    
                </div>
                <div className="steps-content">{this.state.current+1}</div>
                <div className="steps-action">
                  {
                    this.state.current > 0
                    &&
                    <Button style={{ marginLeft: 8 }} type="ghost" onClick={() => this.prev()}>上一步</Button>
                  }
                  {
                    this.state.current < 5
                    &&
                    <Button type="primary" onClick={() => this.next()}>下一步</Button>
                  }
                  {
                    this.state.current === 5
                    &&
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                  }
                </div>
            </div>
        )
    }       
}