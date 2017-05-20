import React,{Component} from 'react'
import { Flex} from 'antd-mobile';
import styles from '../../assets/scss/index.scss'
import {store} from '../../store'

export default class UploadHandle extends Component{
  constructor(props){
    super(props)
  }
  add(){
    console.log(store.getState());
  }
  render(){
    return(
      <div>
        <Flex className={styles.uploadHandle}>
          <Flex.Item>
            <span onClick={()=>this.add()}>一键<br />添加</span>
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
