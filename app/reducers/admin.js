const initialState = {
  check : false
}
const admin = (state=initialState, action) => {
  switch (action.type) {
    case 'admin':
      if (action.check ===1) {
        return {
          check: true
        }
      }else{
        return {
          check: false
        }
      }
    default:
      return state
  }
}
export default admin
