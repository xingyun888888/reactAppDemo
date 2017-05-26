import React,{Component} from 'react'
import {Link} from 'react-router'
import styles from '../assets/scss/index.scss'

export default class TopTitle extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: this.props.title
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.title != this.state.title) {
      this.setState({
        title: nextProps.title
      })
    }
  }
  render(){
    return(
      <div className={styles.topTitle}>
        <Link to='/'>返回</Link>
        <p>{this.state.title}</p>
      </div>
    )
  }
}
