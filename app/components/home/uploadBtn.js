import React,{Component} from 'react'
import {Link} from 'react-router'
import styles from '../../assets/scss/index.scss'
import { Flex, WhiteSpace } from 'antd-mobile'
import Dialog from '../../public/dialog'

export default class UploadBtn extends Component{
  constructor(props){
    super(props)
    this.state = {
      check: false
    }
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(e){
    if (!this.state.check) {
      e.preventDefault()
      this.refs.module.show({
        title    : <span>该功能仅对要打印专业版商户开放<br/><a href="tel:4001585158" target="_blank" style={{color:'#796cdc'}}>400-158-5158</a></span>,
        leftBtn  : '取消',
        rightBtn : '确认',
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.check !== this.props.check ) {
      nextProps.check ?
       this.setState({
         check:true
       }) : ''
    }
  }
  render(){
    return(
      <div className={styles.homeBtn}>
        <Flex wrap="wrap">
          <Link to='/upload/photo'>
            <img src={require('../../assets/imgs/photo_btn.png')} />
            <p>普通照</p>
          </Link>
          <Link to='/upload/protrait' onClick={this.handleCheck}>
            <img src={require('../../assets/imgs/portrait_btn.png')} />
            <p>证件照</p>
          </Link>
          <Link to='/upload/file'>
            <img src={require('../../assets/imgs/file_btn.png')} />
            <p>文档</p>
          </Link>
        </Flex>
        <Dialog ref="module"/>
      </div>
    )
  }
}
