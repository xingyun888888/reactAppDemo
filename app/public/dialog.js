import React,{Component} from 'react'
import styles from '../assets/scss/index.scss'
export default class Dialog extends Component{
	constructor(props){
		super(props)
		this.state = {
			hide:true,
			title:'',
			leftbtn:'',
			rightbtn:'',
			leftFunction:null,
			rightFunction:null
		}
		this.clickRight=this.clickRight.bind(this)
		this.clickLeft=this.clickLeft.bind(this)
	}
	render(){
		if (!this.state.hide) {
			return(
				<div onTouchMove={(e) => {e.preventDefault()}}>
					<div className={styles.layer}></div>
					<div className={styles.layerCon}>
						<p className={styles.layerHead}>提示</p>
						<p className={styles.layerMsg}>{this.state.title || '。。。。。。。。'}</p>
						<div className={styles.layerBtn}>
							{this.state.rightBtn && (
								<button onClick={this.clickRight} >{this.state.rightBtn}</button>
							)}
							{this.state.leftBtn && (
								<button onClick={this.clickLeft} >{this.state.leftBtn}</button>
							)}
						</div>
					</div>
				</div>
			)
		}else{
			return <div></div>
		}
	}
	clickRight(){
		if (this.state.rightFunction) {
			this.state.rightFunction()
		}
		if (!this.state.hide) {
			this.setState({
				hide:true
			})
		}
	}
	clickLeft(){
		if (this.state.leftFunction) {
			this.state.leftFunction()
		}
		if (!this.state.hide) {
			this.setState({
				hide:true
			})
		}
	}
	show(arg){
		if (this.state.hide) {
			this.setState({
				hide         :false,
				title        :arg.title || '',
				leftBtn      :arg.leftBtn || '',
				rightBtn     :arg.rightBtn || '',
				leftFunction :arg.leftFunction || null,
				rightFunction:arg.rightFunction || null,
			})
		}
	}
}
