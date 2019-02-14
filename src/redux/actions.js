import { ADD_WORK } from './actionTypes'

let nextWorkId = 0
export const addWork = content => ({
  type: ADD_WORK,
  payload: {
    id: ++nextWorkId,
    content
  }
})