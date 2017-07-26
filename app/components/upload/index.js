import React,{Component} from 'react'
import {Link,browserHistory} from 'react-router'
import {connect} from 'react-redux'
import * as api from '../../api'
import {store} from '../../store'
import {uploadTitle,uploadType} from '../../actions'

import TopTitle from '../../public/topTitle'
import UploadType from './uploadType'
import UploadFile from './uploadFile'
import UploadHandle from './uploadHandle'




const mapStateToProps = (state) => {
    // console.log(state.uploadType.api);
    const params = browserHistory.getCurrentLocation().pathname.split('/');
    const paramsUrl = params[params.length-1]
    if (paramsUrl==='portrait' && !state.admin.check) {
        browserHistory.push('/')
    }
    return {
        title: state.uploadTitle.title,
        options: state.uploadType.api
    }
}

const mapDispatchToProps = (dispatch) => ({
    renderTitle: (id) => {
        dispatch(uploadTitle(id))
    },
    renderType: (param,options) => {
        dispatch(uploadType(param,options))
    }
})


@connect(mapStateToProps,mapDispatchToProps)
class UploadIndex extends Component{
  constructor(props){
    console.log("sdfsdfsfsdfdsfdfd");
    console.log(props);
    super(props)
    this.state = {
      title: this.props.title,
      options: this.props.options
    }
  }
  componentDidMount(){
    const {type} = this.props.params
    this.props.renderTitle(type)
    this.props.renderType(type,{})
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.title != this.state.title) {
      this.setState({
        title: nextProps.title
      })
    }
    if (JSON.stringify(nextProps.options) != JSON.stringify(this.state.options)) {
      this.setState({
        options: nextProps.options
      })
    }
  }
  handleSize(val){
    const {type} = this.props.params
    const options = this.state.options
    const event = {size:val}
    options.size.option[0].map((e, i) => {
      if (e.value == val) {
        options.size.default = e.value
        options.size.val = e.options.val
        options.size.width = e.options.width
        options.size.height = e.options.height
      }
    })
    this.props.renderType(type,options)
  }
  render(){
    return(
      <div>
        <TopTitle title={this.state.title}/>
        <UploadType options={this.state.options} handleSize={this.handleSize.bind(this)}/>
        <UploadFile/>
        {/* <UploadHandle params={paramsUrl} /> */}
      </div>
    )
  }
}
//
// const mapStateToProps = (state) => {
//   // console.log(state.uploadType.api);
//   const params = browserHistory.getCurrentLocation().pathname.split('/');
//   const paramsUrl = params[params.length-1]
//   if (paramsUrl==='portrait' && !state.admin.check) {
//     browserHistory.push('/')
//   }
//   return {
//     title: state.uploadTitle.title,
//     options: state.uploadType.api
//   }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//   renderTitle: (id) => {
//     dispatch(uploadTitle(id))
//   },
//   renderType: (param,options) => {
//     dispatch(uploadType(param,options))
//   }
// })

// const Upload = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UploadIndex);

//export default Upload
export default UploadIndex;
