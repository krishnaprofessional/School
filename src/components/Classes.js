import React from 'react';

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedClass: null};
  }

  selectedClass = (selectedClassName) => {
    let selectedClassData = this.props.listofClasses.find((classItem) => {
      return classItem.name == selectedClassName;
    });
    this.setState({selectedClass: selectedClassData});
  };

   removeitem = (index) => {

     let selectedClassData = this.props.listofClasses.find((classItem) => {
       return classItem.name == this.state.selectedClass.name;
     });
    let updatedStudentsList =selectedClassData.students.slice();
     updatedStudentsList.splice(index,1);
       this.props.updateStudentList(selectedClassData.name,updatedStudentsList,selectedClassData.students[index]);
  };

  getClassStudents = (name) => {
    let index = this.props.listofClasses.findIndex((classItem) => {
      return classItem.name == this.state.selectedClass.name
      });
    return ( this.props.listofClasses[index].students.map((studentItem, index) =>
    <li key={index} className="box">
       <span className="class-font-style">{studentItem.name}</span>
         <button className="remove-btn" title="Remove" onClick={() => this.removeitem(index)}>X</button>
     </li>
  ));
  }

  render() {
    return (
      <div>  
          <div className = "col-sm-4">
            <ul className="alt-list">{
                this.props.listofClasses.map((classitem, index) =>
                  <li 
                    key={index}
                    className="box"
                    > 
                      <a className="classname class-font-style" onClick={() => this.selectedClass(classitem.name)}>
                          {classitem.name}
                      </a>
                  </li>
                )}
              </ul>
            </div>
          <div className = "col-sm-4">
              {
                this.state.selectedClass &&
                  <ul className="alt-list class-students" id="box2"> 
                      <li className="box1 class-font-style">{this.state.selectedClass.name}</li>
                      {
                        this.getClassStudents()
                        }
                    </ul>

              }

          </div>
            <div className = "col-sm-3">
            </div>
       </div>
    );
  }

}

export default Classes;
