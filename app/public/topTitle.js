import React,{Component} from 'react'
import {Link} from 'react-router'
import styles from '../assets/scss/index.scss'

export default class TopTitle extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: '普通照'
    }
  }
  componentWillMount(){
    const type = this.props.params
    switch (type) {
      case 'portrait':
        this.setState({title:'证件照'})
        break;
      case 'file':
        this.setState({title:'文档'})
        break;
      default:

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
