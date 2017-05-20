import React,{Component} from 'react'
import {Link,browserHistory} from 'react-router'
import styles from '../../assets/scss/index.scss'
import * as api from '../../api'
import {Picker} from 'antd-mobile';
import {store} from '../../store'
import {handleType} from '../../actions'


export default class UploadType extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    const type = this.props.params;
    this.setState({
      type,
      size: api[type].size,
      edge: api[type].edge,
      sSize: [api[type].size.default],
      sEdge: api[type].edge ? [api[type].edge.default] : [],
      //data
      sizeVal: api[type].size.val,
      edgeVal: api[type].edge ? api[type].edge.val : '',
      width: api[type].size.width || '',
      height: api[type].size.height || '',
      num:'1'
    })
  }
  handleNum(val){
    this.setState({
      num:val.target.value.replace(/\D/g,'')
    })
  }
  handleSize(val){
    const size = this.state.size.option[0]
    size.map((e, i) => {
      if (e.value === val[0]) {
        this.setState({
          sizeVal:e.options.val,
          width:e.options.width || '',
          height:e.options.height || ''
        })
      }
    })
    this.setState({
      sSize:val
    })
  }
  handleEdge(val){
    const edge = this.state.edge.option[0]
    edge.map((e, i) => {
      if (e.value === val[0]) {
        this.setState({
          edgeVal:e.val
        })
      }
    })
    this.setState({
      sEdge:val
    })
  }
  render(){
    this._dispatch();
    return(
      <div className={styles.uploadType}>
        {this._moduleSize()}
        {this._moduleEdge()}
        <input type='tel' value={this.state.num} onChange={e => this.handleNum(e)} maxLength={5}/>份
      </div>
    )
  }
  _moduleSize(){
    const size = this.state.size.option
    return(
      <Picker
        data={size}
        title="选择尺寸"
        cascade={false}
        extra="请选择"
        value={this.state.sSize}
        onChange={v => this.handleSize(v)}
      >
        <CustomChildren></CustomChildren>
      </Picker>
    )
  }
  _moduleEdge(){
    if (this.state.edge) {
      const edge = this.state.edge
      return(
        <Picker
          data={edge.option}
          title="选择边距"
          cascade={false}
          extra="请选择"
          value={this.state.sEdge}
          onChange={v => this.handleEdge(v)}
        >
          <CustomChildren></CustomChildren>
        </Picker>
      )
    }
  }
  _dispatch(){
    const options = this.state.width === '' ? {
      sizeVal: this.state.sizeVal,
      num: this.state.num
    } : {
      sizeVal: this.state.sizeVal,
      edgeVal: this.state.edgeVal,
      width: this.state.width,
      height: this.state.height,
      num: this.state.num
    }
    store.dispatch(handleType(options))
  }
}

const CustomChildren = props => (
  <span onClick={props.onClick} >{props.extra}</span>
);
