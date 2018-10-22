import {ASSIGN_STUDENT, ADD_STUDENT, UPDATE_CLASS_STUDENTS} from '../constants/actionTypes';
import initialState from './initialState';

export default function ClassesReducer(state = initialState.Students, action) {
  

  switch (action.type) {
    case ADD_STUDENT:   
   {   let studentsList = state.slice();
    studentsList.push( {name:action.studentName});
      return studentsList;}
    case ASSIGN_STUDENT:
    {let index = state.findIndex((studentItem) => {
       return studentItem.name == action.selectedStudent.name
       });
     
       return [
         ...state.slice(0, index),
    
         ...state.slice(index + 1), // everything after current post
         ];}
         case UPDATE_CLASS_STUDENTS:
         {   let studentsList = state.slice();
          var deletedStudent = {...action.deletedStudent};
          studentsList.push( deletedStudent);
            return studentsList;}
    default:
      return state;
      
  }
}

