import React from 'react'
import {Link} from 'react-router'
import styles from '../styles/Greeter.less'


export default class Home extends React.Component{
	render(){
		return (
			<div className={styles.app}>
				首页
			</div>
		)
	}
}
