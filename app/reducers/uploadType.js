
const uploadType = (state={}, action) => {
  switch (action.type) {
    case 'uploadType':
      return Object.assign({},state,action)
    default:
      return state
  }
}
export default uploadType
