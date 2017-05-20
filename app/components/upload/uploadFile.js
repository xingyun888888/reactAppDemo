import React,{Component} from 'react'
import styles from '../../assets/scss/index.scss'

export default class UploadFile extends Component{
  render(){
    return(
      <div className={styles.uploadMsg}>
        <p>温馨提示：</p>
        <p>上传文件时需要注意一下事项</p>
        <p>上传文件所支持的格式jpg/jpeg/png/tif/tiff/bmp</p>
        <p>上传文件最大支持100mb</p>
        <p>点击照片可以进行编辑</p>
      </div>
    )
  }
}
