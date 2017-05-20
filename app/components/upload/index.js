import React,{Component} from 'react'
import {Link,browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {store} from '../../store'
import {update} from '../../actions'

import TopTitle from '../../public/topTitle'
import UploadType from './uploadType'
import UploadFile from './uploadFile'
import UploadHandle from './uploadHandle'

const UploadIndex = ({paramsUrl}) => {
  return(
    <div>
      <TopTitle params={paramsUrl} />
      <UploadType params={paramsUrl} />
      <UploadFile params={paramsUrl} />
      <UploadHandle params={paramsUrl} />
    </div>
  )
}
const mapStateToProps = (state) => {
  const params = browserHistory.getCurrentLocation().pathname.split('/');
  const paramsUrl = params[params.length-1]
  if (paramsUrl==='portrait' && !state.admin.check) {
    browserHistory.push('/')
  }
  return {
    paramsUrl
  }
}

const mapDispatchToProps = {
  update
}

const Upload = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadIndex);
export default Upload
