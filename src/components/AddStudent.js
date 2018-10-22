import React from 'react';

class AddStudent extends React.Component {
constructor(props) {
super(props);
this.state = {newStudentName: "", isExists: false, selectedClass:"select"};
}

change = (event) =>{
  this.setState({selectedClass: event.target.value});
  };
setStudentName = (e) => {
this.setState({newStudentName: e.target.value});
};

createStudent = () =>{
let isAvailable = this.props.listofStudents.find((studentItem) => {
return studentItem.name == this.state.newStudentName;
});

if(isAvailable)
this.setState({isExists: true});
else{
  this.props.addStudent(this.state.newStudentName);}
  if(this.state.selectedClass != "select")
  this.assignStudent();
};

assignStudent = () =>{
  this.props.assignStudent({name: this.state.newStudentName}, this.state.selectedClass);
  };

render() {
  return (
    <div>
      <div className="col-sm-4"></div>
          <div className= "col-sm-4" style={{boxShadow:" 2px 2px 8px 8px #C9C9C9", marginTop: "50px", paddingTop: "10px"}}>
              <div className="row">
                <div className="col-sm-2"></div>
                  <input id="textboxid" className="col-sm-8" placeholder="Enter Student Name" onChange={this.setStudentName} />
                  {this.state.isExists && <span className="col-sm-12 error-message">Student Already Exists</span>}
                  </div>
              <div className="row">
                <div className="col-sm-3"></div>
                    <select className="add-dropdown col-sm-6" onChange={this.change} value={this.state.selectedClass}>
                    <option value="select">Select Class</option> 
                    {
                          this.props.listofClasses.map((classitem, index) =>
                          <option key={index} >{classitem.name}</option>
                      )}
                    </select>
                </div>

          <div className="row">
              <div className="col-sm-3"></div>
                <button onClick={this.createStudent} className= "btn btn-primary add-student-btn col-sm-6">Add Student</button>
          </div>
      </div>
    </div>
  );
}
}

export default AddStudent;
