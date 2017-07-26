/**
 * Created by gaochao on 7/26/17.
 */
import React,{Component} from "react";

import {connect} from "react-redux";


const  mapStateToProps=(state)=>{
   return state;

}


const mapDispatchToProps = (dispatch)=>{
    return {}
}


@connect(mapStateToProps,mapDispatchToProps)
class Index extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    render(){
      return (<div>这是产品详情页</div>);
    }
}


export default Index;