import * as api from '../api'

export const uploadTitle = (state='', action) => {
  switch (action.type) {
    case 'uploadTitle':
      switch (action.title) {
        case 'photo':
          return {title:'普通照'}
        case 'portrait':
          return {title:'证件照'}
        case 'file':
          return {title:'文档'}
        default:
          return {title:''}
      }
    default:
      return state
  }
}

export const uploadType = (state={}, action) => {
  console.log(action.options);
  console.log(api['photo']);
  switch (action.type) {
    case 'uploadType':
      switch (action.param) {
        case 'photo':
          return {api: Object.assign({}, api['photo'], action.options)}
        case 'portrait':
          return {api:api['portrait']}
        case 'file':
          return {api:api['file']}
        default:
        return {}
      }
      // return Object.assign({},state,action)
    default:
      return state
  }
}


export const uploadFiles = (state={},action) => {
  switch (action.type) {
    case 'uploadFiles':
      return state
      break;
    default:
      return state
  }
}
