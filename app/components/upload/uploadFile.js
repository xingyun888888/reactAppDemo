import React,{Component} from 'react'
import {Link} from 'react-router'
import styles from '../../assets/scss/index.scss'

export default class UploadFile extends Component{
  render(){
    return(
      <div className={styles.uploadMsg}>
        <p>温馨提示：</p>
        <p>需要注意一下事项</p>
        <p>需要注意一下事项</p>
        <p>需要注意一下事项</p>
        <p>需要注意一下事项</p>
        <Link to='/edit'>编辑页面</Link>
      </div>
    )
  }
}
