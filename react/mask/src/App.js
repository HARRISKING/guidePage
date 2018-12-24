import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
           styles: {background: 'red'},
           param:{},
           index: 1
        }
    }
    componentDidMount(){
        this.next(1)
    }
next(index){
    let eles = null
    const {state} = this
    if(index === 1){
       state.param = {
            ref: 'first-step',
            desc: '我是第一步的说明'
       }
       eles = this.refs.firstStep 
    }else if( index === 2 ){
       state.param = {
            ref: 'first-step',
            desc: '我是第三步的说明'
       } 
       eles = this.refs.secondStep
    }else if( index === 3 ){
        state.param = {
            ref: 'first-step',
            desc: '我是第二步的说明'
        } 
       eles = this.refs.thirdStep
    }    
    const mask = this.refs.mask
    // 获取要cover的元素基本信息
    const offsetWidth = eles.offsetWidth
    const offsetHeight = eles.offsetHeight
    const offsetLeft = eles.offsetLeft
    const offsetTop = eles.offsetTop
    // 获取屏幕大小，包含滚动区域
    const scrollHeight = document.body.scrollHeight
    const scrollWidth = document.body.scrollWidth
    state.styles = {
        width: `${scrollWidth}px`,
        height: `${scrollHeight}px`,
        borderColor: "rgba(0,0,0,0.75)",
        borderStyle: "solid",
        borderLeftWidth: `${offsetLeft-5}px`,
        borderRightWidth: `${scrollWidth - offsetWidth - offsetLeft - 5 }px`,
        borderTopWidth: `${offsetTop-5}px`,
        borderBottomWidth:`${scrollHeight - offsetHeight - offsetTop -5}px`,
        position: 'absolute',
        left: 0,
        top: 0
    }
    if(state.index < 3){
        state.index = index += 1
    }
this.setState(state)
}
  render() {

    console.log('state',this.state)
    return (
      <div>
        <div ref="firstStep" id="first-step" className="steps" onClick={this.next.bind(this,1)}>第一步</div>
        <div ref="secondStep" id="second-step" className="steps">第二步</div>
        <div ref="thirdStep" id="third-step" className="steps" onClick={this.next.bind(this,3)}>第三步</div>
        <div ref="mask" style={this.state.styles}>
            <div className="mask-tip">
                <span ref="mask-desc" className="mask-tip-desc"></span>
                <button ref="mask-next" className="mask-tip-btn" onClick={this.next.bind(this,this.state.index)}>下一步</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
