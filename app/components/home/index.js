import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../../actions'

import HomeSwiper from './homeSwiper'
import UploadBtn from './uploadBtn'
import ZmTabBar from '../../public/tabBar'

const mapStateToProps = (state) => {
    console.log(state);
    return {
        check:state.admin.check
    }
}
@connect(mapStateToProps)
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
                  {/*<HomeSwiper check={this.props.check}/>*/}
                   {/*<UploadBtn check={this.props.check}/>*/}
                   <ZmTabBar></ZmTabBar>
                </div>);
    }
}
//  Home = ({check,dispatch}) => {
//   return(
//     <div>
//       <HomeSwiper check={check}/>
//       <UploadBtn check={check}/>
//     </div>
//   )
// }
// const mapDispatchToProps = (dispatch) => {
//
// }
// const Index = connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(Home)



// export default Index
export default Home;
