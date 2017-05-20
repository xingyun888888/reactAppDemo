import React,{Component} from 'react'
import {connect} from 'react-redux'
import Home from './home'

class IndexComponent extends Component{
  render(){
    return(
      <div>
        {this.props.children || <Home />}
      </div>
    )
  }
}

const Index = connect()(IndexComponent)

export default Index
