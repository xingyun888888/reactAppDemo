import React,{Component} from 'react'
import {render} from 'react-dom'
import {Router, browserHistory,hashHistory} from 'react-router'
import {store} from './store'
import {Provider} from 'react-redux'

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./components').default,
    childRoutes: [
      require('./routes/upload'),
      require('./routes/edit')
    ]
  }]
}

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={rootRoute}
    />
  </Provider>
  , document.getElementById('app')
)
