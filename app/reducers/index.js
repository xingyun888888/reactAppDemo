import {combineReducers} from 'redux'
// import {routerReducer} from 'react-router-redux'
import admin from './admin'
import uploadType from './uploadType'
import update from './update'

const reducers = combineReducers({
  admin,
  uploadType,
  update
  // routing:routerReducer
})
export default reducers
