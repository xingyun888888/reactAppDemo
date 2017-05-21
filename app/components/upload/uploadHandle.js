import React,{Component} from 'react'
import { Flex} from 'antd-mobile';
import styles from '../../assets/scss/index.scss'
import {store} from '../../store'
import * as api from '../../api'
import BinUpload from '../../public/binUpload'

export default class UploadHandle extends Component{
  constructor(props){
    super(props)
    this.state = {
      toChocie: false
    }
  }
  add(e){
    e.stopPropagation();
    alert(1)
    const url = api.randomdir
    const options = {
      method: 'post',
      mode: 'cros',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => [
        console.log(err)
      ])
    this.refs.binUpload.click()
  }
  clear(){
    console.log(store.getState())
  }
  beauty(){
    console.log(store.getState())
  }
  print(){
    console.log(store.getState())
  }
  preview(e){
    console.log(e.target.files)
  }
  render(){
    return(
      <div>
        <Flex className={styles.uploadHandle}>
          <Flex.Item>
            <span onClick={this.add.bind(this)}>一键<br />添加</span>
            <BinUpload ref='binUpload' url={api.upload} preview={this.preview}/>
          </Flex.Item>
          <Flex.Item>
            <span onClick={()=>this.clear()}>一键<br />添加</span>
          </Flex.Item>
          <Flex.Item>
            <span onClick={()=>this.beaury()}>一键<br />添加</span>
          </Flex.Item>
          <Flex.Item>
            <span onClick={()=>this.print()}>一键<br />添加</span>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}
