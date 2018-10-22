import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/CreateClassActions';
import CreateClass from '../CreateClass';



export class CreateClassesContainer extends React.Component {
  addClass = className => {
    this.props.actions.addClass(className);
    };
  render() {
    return (
      <CreateClass
      listofClasses = {this.props.Classes}
      addClass = {this.addClass}
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
)(CreateClassesContainer);
