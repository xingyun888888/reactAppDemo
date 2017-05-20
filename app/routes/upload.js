import {connect} from 'react-redux'
module.exports = {
  path: '/upload/:type',
  getComponent(nextState, cb){
    require.ensure([], (require) => {
      cb(null, require('../components/upload').default)
    }, 'upload')
  }
}
