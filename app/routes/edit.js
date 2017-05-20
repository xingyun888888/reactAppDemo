module.exports = {
  path: '/edit',
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
      cb(null, require('../components/edit').default)
    }, 'edit')
  }
}
