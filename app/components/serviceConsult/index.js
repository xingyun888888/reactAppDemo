/**
 * Created by gaochao on 7/25/17.
 */
import React,{Component} from "react";

import {connect} from "react-redux";

import ConsultCard from './consultCard'

const mapStateToProps=(state)=>{


    return state
}

const mapDispatchToProps=()=>{

    return{

    }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class ServiceConsult extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    componentWillReceiveProps(curProps,oldProps){

    }

    componentWillUpdate(){

    }

    componentDidUpdate(){

    }


    render(){
        return(<div style={{height:"100%"}}>
                    <ConsultCard
                        cardImg={require("../../assets/images/online-consult.png")}
                        cardTitle="在线咨询"
                        cardDescribe="与客服人员线上沟通"
                    />
                    <ConsultCard
                        cardImg={require("../../assets/images/callback-consult.png")}
                        cardTitle="回电咨询"
                        cardDescribe="留下您的联系方式，等待工作人员与您联络"
                    />
                    <ConsultCard
                        cardImg={require("../../assets/images/wechat-consult.png")}
                        cardTitle="微信咨询"
                        cardDescribe="扫描二维码添加客服微信"
                    />
               </div>);
    }

}