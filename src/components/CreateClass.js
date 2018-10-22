import React from 'react';

class CreateClass extends React.Component {
constructor(props) {
super(props);
this.state = {newClassName: "", isExists: false};
}
setClassName = (e) => {
  this.setState({newClassName: e.target.value});
};

createClass = () =>{
    let isAvailable = this.props.listofClasses.find((classItem) => {
    return classItem.name == this.state.newClassName;
});

if(isAvailable)
    this.setState({isExists: true});
else
   this.props.addClass(this.state.newClassName);
};

render() {
    return (
    <div>
      <div className="col-sm-4"></div>
        <div className= "col-sm-4" style={{boxShadow:" 2px 2px 8px 8px #C9C9C9", marginTop: "50px", paddingTop: "10px"}}>
              <div className="row">
                <div className="col-sm-2"></div>
                  <input id="textboxid" className="col-sm-8" placeholder="Enter Class Name" onChange={this.setClassName} />
                  {this.state.isExists && <span className="col-sm-12 error-message">Class Already Exists</span>}
              </div>
            <div className="row">
              <div className="col-sm-3"></div>
                <button onClick={this.createClass} className= "btn btn-primary add-student-btn col-sm-6">Create Class</button>
            </div>
         </div>
    </div>
    );
    }
}

export default CreateClass;
