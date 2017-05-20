import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../actions'

import HomeSwiper from './homeSwiper'
import UploadBtn from './uploadBtn'

const Home = ({check,dispatch}) => {
  return(
    <div>
      <HomeSwiper check={check}/>
      <UploadBtn check={check}/>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    check:state.admin.check
  }
}
// const mapDispatchToProps = (dispatch) => {
//
// }
const Index = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home)
export default Index
