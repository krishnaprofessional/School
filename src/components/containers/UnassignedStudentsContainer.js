import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/CreateClassActions';
import  UnassignedStudents from '../UnassignedStudents';

export class UnassignedStudentsContainer extends React.Component {
  
assignStudent = (selectedStudent,selectedClass) =>{
    this.props.actions.assignStudent(selectedStudent,selectedClass);
    };

  render() {
    return (
      <UnassignedStudents
      listofStudents = {this.props.Students}
      listofClasses = {this.props.Classes}
      assignStudent = {this.assignStudent}
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
)(UnassignedStudentsContainer);