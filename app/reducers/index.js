import {combineReducers} from 'redux'
import admin from './admin'
import {uploadTitle ,uploadType, uploadFiles} from './upload'

const reducers = combineReducers({
  admin,
  uploadTitle,
  uploadType,
  uploadFiles,
})
export default reducers
