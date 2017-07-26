/**
 * Created by gaochao on 7/26/17.
 */
import React,{Component} from "react"

import {connect} from "react-redux"

import style from './style.scss'

export default class Index extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
      return(
            <div className={style.businessCooperationContainer}>
                <div className={style.formItem}>
                    <div className={style.listTitle}>
                        <b></b>
                        <span>姓名</span>
                    </div>
                    <input  />
                </div>
                <div className={style.formItem}>
                    <div className={style.listTitle}>
                        <b></b>
                        <span>性别</span>
                    </div>
                    <input  />
                </div>
                <div className={style.formItem}>
                    <div className={style.listTitle}>
                        <b></b>
                        <span>手机号码</span>
                    </div>
                    <input  />
                </div>
                <div className={style.formItem}>
                    <div className={style.listTitle}>
                        <b></b>
                        <span>联系地址</span>
                    </div>
                    <input  />
                </div>
                <div className={style.formItem}>
                    <div className={style.listTitle}>
                        <b></b>
                        <span>从事行业</span>
                    </div>
                    <input  />
                </div>
                <div className={style.formItem}>
                    <div className={style.listTitle}>
                        <b></b>
                        <span>所在公司</span>
                    </div>
                    <input  />
                </div>
                <div className={style.formItem}>
                    <div className={style.listTitle}>
                        <b></b>
                        <span>申请合作公司</span>
                    </div>
                    <input  />
                </div>

                <div className={style.formSave}>
                    <a href="javascript:void(0)" >确认提交</a>
                </div>
            </div>
            )
    }
}