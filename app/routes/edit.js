module.exports = {
  path: '/edit',
  getComponent(nextState, cb){
    require.ensure([], (require) => {
      cb(null, require('../components/edit').default)
    }, 'edit')
  }
}


