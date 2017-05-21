import React,{Component} from 'react'

export default class BinUpload extends Component{
  constructor(props){
    super(props)

  }
  componentWillMount(){

  }
  preview(e){
    this.props.preview(e)
  }
  render(){
    return(
      <input type="file" ref='binUpload' style={{width:'0',height:'0',}} onChange={this.preview.bind(this)}/>
    )
  }
  click(){
    this.refs.binUpload.click()
  }
}
