/**
 * Created by gaochao on 7/26/17.
 */
import React,{Component} from 'react'

import {connect} from "react-redux"

import PostionCard from "./positionCard"

const mapStateToProps = (state)=>state;

const mapDispatchToProps = (dispatch)=>{
    return {
        
    }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
           container:[]
        }
    }
    componentWillMount(){

    }

    componentDidMount(){
        for(var i=0;i<5;i++){
            this.state.container.push(<PostionCard key={i}/>)
        }
        this.forceUpdate();
    }

    render(){
        return (<div>
                    {this.state.container}
                </div>)
    }
}

