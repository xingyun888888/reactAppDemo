/**
 * Created by gaochao on 7/26/17.
 */
import React,{Component} from "react"

import style from "./positionCard.scss"


export default class PositionCard extends Component{
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
        return (<div className={style.joinUsContainer}>
            <div className={style.positionImg}>
                <img src={require("../../assets/images/project/project.png")} alt=""/>
            </div>
            <div>
                <div className={style.positionTitle}>
                    直销经理/直销总监(南山区)
                </div>
                <div className={style.positionStatement}>
                    <h3>岗位职责</h3>
                    <p>1、负责辖区内销售团队的建立和打造；</p>
                    <p>2、制定季度月度销售计划，并跟进执行；</p>
                    <p>3、依据营销计划，执行销售和市场推广方案。</p>

                </div>
                <div className={style.positionRequire}>
                    <h3>岗位要求:</h3>
                    <p>1、大专及以上学历，专业不限;</p>
                    <p>2、有5年以上电话营销经验，2年以上团队管理能力。</p>
                </div>
            </div>
        </div>)
    }

}