import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import ClassesContainer from "./containers/ClassesContainer";
import UnassignedStudentsContainer from "./containers/UnassignedStudentsContainer";
import AddStudentContainer from './containers/AddStudentContainer';
import CreateClassesContainer from './containers/CreateClassesContainer';

class App extends React.Component {
  render() {
    const activeStyle = { color: "skyblue", textDecorationLine:"none" };
    return (
      <div id="bck">
          <div id="bck0"></div>
            <div id="bck1">
                <div id= "logo"></div>
          </div>
            <div id="main">
                <NavLink exact to="/" activeStyle={activeStyle} id="sub_header">Classes</NavLink>
                <NavLink to="/Unassigned" activeStyle={activeStyle} id="sub_header">Unassigned students</NavLink>
                <NavLink to="/Add" activeStyle={activeStyle} id="sub_header">Add student</NavLink>
                <NavLink to="/Create" activeStyle={activeStyle} id="sub_header">Create class</NavLink>
            </div>
              <Switch>
                <Route exact path="/" component={ClassesContainer} />
                <Route path="/Unassigned" component={UnassignedStudentsContainer} />
                <Route path="/Add" component={AddStudentContainer} />
                <Route path="/Create" component={CreateClassesContainer} />
                <Route component={NotFoundPage} />
              </Switch>
       </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
