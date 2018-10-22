import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/CreateClassActions';
import AddStudent from '../AddStudent';

export class AddStudentContainer extends React.Component {
  addStudent = studentName => {
    this.props.actions.addStudent(studentName);
    };
    assignStudent = (selectedStudent,selectedClass) =>{
        this.props.actions.assignStudent(selectedStudent,selectedClass);
        };
  render() {
    return (
      <AddStudent
      listofStudents = {this.props.Students}
      addStudent = {this.addStudent}
      assignStudent = {this.assignStudent}
      listofClasses = {this.props.Classes}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    Students: state.Students,
    Classes: state.Classes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudentContainer);
