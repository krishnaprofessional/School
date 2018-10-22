import {CREATE_CLASS, ASSIGN_STUDENT, UPDATE_CLASS_STUDENTS} from '../constants/actionTypes';
import initialState from './initialState';

export default function ClassesReducer(state = initialState.Classes, action) {
  let classList = state.slice();

  switch (action.type) {
    case CREATE_CLASS:   
      classList.push( {name:action.className, students:[]});
      return classList;
   case ASSIGN_STUDENT:
     {let index = state.findIndex((classItem) => {
        return classItem.name == action.selectedClass
        });

        let updatedStudents = state[index].students.slice();
      
        updatedStudents.push(action.selectedStudent);
        return [
          ...state.slice(0, index),
          {
          ...state[index],
          students:updatedStudents,
          },
          ...state.slice(index + 1), // everything after current post
          ];}

   case UPDATE_CLASS_STUDENTS:
          {let index = state.findIndex((classItem) => {
             return classItem.name == action.className
             });
             
             return [
               ...state.slice(0, index),
               {
               ...state[index],
               students:action.studentList,
               },
               ...state.slice(index + 1), // everything after current post
               ];}    
    default:
      return state;
      
  }
}