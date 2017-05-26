import React,{Component} from 'react'
import {Link,browserHistory} from 'react-router'
import styles from '../../assets/scss/index.scss'
import {Picker} from 'antd-mobile';

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ]
];
export default class UploadType extends Component{
  constructor(props){
    super(props)
    this.state = {
      size: '',
      edge: '',
      defaultSize: [],
      defaultEdge: []
    }
  }
  handleNum(val){

  }
  handleSize(val){
    const defaultValue = val[0]
    this.props.handleSize(defaultValue)
  }
  handleEdge(val){

  }
  componentWillReceiveProps(nextProps){
    const {options} = nextProps
    options.size ? this.setState({
      size: options.size,
      defaultSize: [options.size.default]
    }) : ''
    options.edge ? this.setState({
      edge: options.edge,
      defaultEdge: [options.edge.default]
    }) : ''
  }
  render(){
    return(
      <div className={styles.uploadType}>
        {this._moduleSize()}
        {this._moduleEdge()}
        <input type='tel' value='1' onChange={e => this.handleNum(e)} maxLength={5}/>份
      </div>
    )
  }
  _moduleSize(){
    if (this.state.size != '') {
      return(
        <Picker
          data={this.state.size.option}
          title="选择尺寸"
          cascade={false}
          extra="请选择"
          value={this.state.defaultSize}
          onChange={v => this.handleSize(v)}
        >
          <CustomChildren></CustomChildren>
        </Picker>
      )
    }
  }
  _moduleEdge(){
    if (this.state.edge != '') {
      return(
        <Picker
          data={this.state.edge.option}
          title="选择边距"
          cascade={false}
          extra="请选择"
          value={this.state.defaultEdge}
          onChange={v => this.handleEdge(v)}
        >
          <CustomChildren></CustomChildren>
        </Picker>
      )
    }
  }
}

const CustomChildren = props => (
  <span onClick={props.onClick} >{props.extra}</span>
);
