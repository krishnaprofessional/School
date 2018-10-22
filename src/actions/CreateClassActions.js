import * as types from '../constants/actionTypes';


export function  addClass(className) {
  return {
    type: types.CREATE_CLASS,
    className

  };
}
export function  addStudent(studentName) {
  return {
    type: types.ADD_STUDENT,
    studentName
  };
}
export function  assignStudent(selectedStudent,selectedClass) {
  return {
    type: types.ASSIGN_STUDENT,
    selectedStudent,selectedClass

  };
}
export function  updateStudentList(className, studentList, deletedStudent) {
  return {
    type: types.UPDATE_CLASS_STUDENTS,
    className, studentList,deletedStudent

  };
}
