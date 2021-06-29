import { fromJS } from "immutable";

const ActionTypes = {};

/** 常规滴 */
export const initialState1 = {
  students: {},
  selectedStudent: null
};
  
export  function studentReducer1(state = initialState1, { type, payload }) {
  switch (type) {
    case ActionTypes.setStudentStatus:
      return {
        ...state,
        students: {
          ...state.students,
           [payload.studentId]: {
             ...state.students[payload.studentId],
             status: payload.status
           }
        }
      }
    default:
      return state;
  }
}

/** 使用immutable.js */
export const initialState2 = fromJS({
  students: {},
  selectedStudent: null
});
  
export function studentReducer2(state = initialState2, { type, payload }) {
  switch (type) {
    case ActionTypes.setStudentStatus:
      return state.setIn(['students', payload.studentId, 'status'], payload.status)
    default:
      return state;
  }
  
}