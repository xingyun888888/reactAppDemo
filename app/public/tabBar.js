/**
 * Created by gaochao on 7/25/17.
 */
import React,{Component} from 'react'
import {Link,browserHistory} from 'react-router'

import {TabBar,Icon} from "antd-mobile"

import styles from '../assets/scss/index.scss'

export default class ZmTabBar extends Component{
    constructor(props,context){
        super(props);
        this.state={
            selectTab:'redTab',
            hidden:false
        }
    }
    renderContent(pageText,path) {
        // return (
        //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        //         <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        //         <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
        //            onClick={(e) => {
        //                e.preventDefault();
        //                this.setState({
        //                    hidden: !this.state.hidden,
        //                });
        //            }}
        //         >
        //             点击切换 tab-bar 显示/隐藏
        //         </a>
        //     </div>
        // );
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="服务咨询"
                    key="服务咨询"
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(../assets/images/svg/home.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(../assets/images/svg/home.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'blueTab'}
                    //badge={1}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                        browserHistory.push({
                            pathname:"/serviceConsult",
                            query:{title:"服务咨询"}
                        })
                    }}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(../assets/images/svg/home.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(../assets/images/svg/home.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    title="合作洽谈"
                    key="合作洽谈"
                    //badge={'new'}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                        browserHistory.push({
                            pathname:"/businessCooperation",
                            query:{title:"合作洽谈"}
                        })
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(../assets/images/svg/home.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(../assets/images/svg/home.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    title="交换名片"
                    key="交换名片"
                    //dot
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(../assets/images/svg/home.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(../assets/images/svg/home.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    title="加入我们"
                    key="加入我们"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                        browserHistory.push({pathname:"/joinUs",query:{title:"加入我们"}});

                    }}
                >
                </TabBar.Item>
            </TabBar>
        );
    }
}
