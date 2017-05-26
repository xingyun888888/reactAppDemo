import React,{Component} from 'react'
import 'whatwg-fetch'

export default class BinUpload extends Component{
  constructor(props){
    super(props)
    this.state = {
      url: this.props.url,
      multiple: this.props.multiple,
      thread: this.props.thread,
      size: this.props.size,
      type: this.props.type || 'jpg'
    }
  }
  componentDidMount(){
    if (this.state.multiple) {
      this._binUpload.setAttribute('multiple', 'multiple')
    }
  }
  preview(e){
    const files = e.target.files
    for(const file of files){
      // 检测type
      this.fileType(file)
    }
    e.target.value=''
  }
  fileType(file){
    const type = file.type.split('/')[file.type.split('/').length-1]
    if (this.state.type.indexOf(type) === -1) {
      alert(file.name+'type error')
    }else{
      this.fileSize(file)
    }
  }
  fileSize(file){
    const size = file.size/1024/1024;
    if (size > this.state.size) {
      // size 过大
      alert(type.name+ 'size error')
    }else{
      // dispatch file
      this.fileAdd(file)
    }
  }
  fileAdd(file){
    const formData = new FormData(document.getElementById('form'))
    formData.append('file', file)
    formData.append('type', file.type)
    formData.append('size', file.size)
    formData.append('lastModified', file.lastModified)
    const url = this.state.url
    const options = {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      data: formData
    }
    console.log(file);
    console.log(formData);
    fetch(url, options)
      .then(response => {
        if (response.headers.get('content-type').match(/application\/json/)) {
          return response.json();
        }
        return response;
      })
      .then(data => {
        console.log(data);
        // this.props.preview(data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  render(){
    return(
      <form encType="multipart/form-data">
        <input type="file" ref={binUpload => this._binUpload = binUpload} style={{width:'0',height:'0',}} onChange={this.preview.bind(this)}/>
      </form>
    )
  }
  click(){
    this._binUpload.click();
  }
}
