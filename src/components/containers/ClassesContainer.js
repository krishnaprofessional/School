import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Classes from '../Classes';
import * as actions from '../../actions/CreateClassActions';

export class ClassesContainer extends React.Component {
  updateStudentList = (className, studentList, deletedStudent) => {
    this.props.actions.updateStudentList(className, studentList, deletedStudent);
    };

  render() {
    return (
      <Classes
      listofClasses = {this.props.Classes}
      updateStudentList = {this.updateStudentList}
      />
    );
  }
}
  
function mapStateToProps(state) {
  return {
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
)(ClassesContainer);
