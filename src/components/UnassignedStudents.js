import React from 'react';

class UnassignedStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedStudent: null, selectedClass:"select"};
  }
  selectedStudent = (selectedStudentName) => {
    let selectedStudentData = this.props.listofStudents.find((studentItem) => {
      return studentItem.name == selectedStudentName;
    });
    this.setState({selectedStudent: selectedStudentData});
  };
  change = (event) =>{
    this.setState({selectedClass: event.target.value});
    };

assignStudent = () =>{
  if(this.state.selectedClass != "select") {
    this.props.assignStudent(this.state.selectedStudent, this.state.selectedClass);
    this.setState({selectedStudent: null, selectedClass: "select"});
  }
  };

  render() {
    return (
    <div>
          <div className = "col-sm-6">
          <h1 id= "header">Students: </h1>
                <ol>{
                  this.props.listofStudents.map((studentitem, index) =>
                    <li key={index} className="list1" >
                      <a className="classname class-font-style" onClick={() => this.selectedStudent(studentitem.name)}>
                          {studentitem.name}
                        </a>
                    </li>
                  )}
                </ol>
          </div>

        <div className = "col-sm-3">
            {
              this.state.selectedStudent &&
              <ul className="alt-list class-students">
                  <li className="box1 class-font-style">{this.state.selectedStudent && this.state.selectedStudent.name}</li>
                  {
                    <li className="alt-list1">
                      <select className="test" onChange={this.change} value={this.state.selectedClass}>
                          <option value="select">Select Class</option>
                            {
                                this.props.listofClasses.map((classitem, index) =>
                                <option key={index} >{classitem.name}</option>
                            )}
                        </select>
                            <button className="btn btn-primary assign-btn" onClick={this.assignStudent}>Assign</button>
                      </li>
                  }
              </ul>
            }
          </div>
        <div className = "col-sm-3"></div>
     </div>
    );
  }
}

export default UnassignedStudents;
