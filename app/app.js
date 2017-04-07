import React from 'react'
import {render} from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import Home from './home/home'
import Product from './product/product'
import './styles/main.less'

render((
	<Router>
		<div>
			<ul>
				<li><Link to="/">首页</Link></li>
				<li><Link to="/product">关于</Link></li>
			</ul>
			<Route exact path="/" component={Home} />
			<Route path="/product" component={Product} />
		</div>
	</Router>
), document.getElementById('app'))
