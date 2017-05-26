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
      toChocie: false,
    }
    this.add = this.add.bind(this)
  }
  add(e){
    const binUpload = this._binUpload
    const url = api.randomdir
    const options = {
      method: 'post',
      // mode: 'cros',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    binUpload.click()
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
      })
      .catch(err => {
        // console.log(err);
      })
  }
  preview(files){

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
  render(){
    return(
      <div>
        <Flex className={styles.uploadHandle}>
          <Flex.Item>
            <span onClick={this.add}>一键<br />添加</span>
            <BinUpload
              ref={binUpload => this._binUpload = binUpload}
              url={api.upload}
              multiple='true'  // 指定 是否多文件上传
              size='1' //单位为 mb
              thread='3' //并发上传数，0位无并发
              type='jpg,jpeg'
              preview={this.preview}
            />
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
