import {connect} from 'react-redux'
module.exports = {
  path: '/upload/:type',
  // getChildRoutes(partialNextState, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, [
  //       require('./routes/Announcements'),
  //       require('./routes/Assignments'),
  //       require('./routes/Grades')
  //     ])
  //   })
  // },
  getComponent(nextState, cb){
    require.ensure([], (require) => {
      cb(null, require('../components/upload').default)
    }, 'upload')
  }
}
