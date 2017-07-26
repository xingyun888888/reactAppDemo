/**
 * Created by gaochao on 7/25/17.
 */
import React,{Component} from "react";

import {connect} from 'react-redux'

import style from './consultCard.scss'

export default class ConsultCard extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    componentWillMount(){

    }

    componentDidMount(){

    }


    render(){
        return (<div className={style.consultCardContainer}>
                     <div className={style.leftContent}>
                        <div className={style.cardImg}>
                            <img src={this.props.cardImg} alt=""/>
                        </div>
                     </div>
                     <div className={style.rightContent}>
                         <h3>{this.props.cardTitle}</h3>
                         <p>{this.props.cardDescribe}</p>
                     </div>
                </div>)
    }
}
