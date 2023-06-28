import React, { Component } from 'react'
import axios from 'axios'
import './Classes.css'
import { connect } from 'react-redux';


class StudentsClass extends Component {
    state = {
        //    clss: null,
        // studintList: []
    }
    componentDidMount() {
        const _id = this.props.match.params.class_id
        if(this.props.classById.id == _id){
           console.log("get student data from redux");
            return this.props.studentList; 
        }
        else {
            axios.get(`http://localhost:8086/api/student/dto/${_id}`)
                .then(res => {
                    console.log(res.data);
                    console.log("get the student data by axios and put into redux");
                    this.props.class_By_Id(res.data.classRoom);
                    this.props.studint_List_By_Id(res.data.studentList)
                })
        }
    }
    render() {
        console.log(this.props);
        console.log(this.props.studentList);


        const {studentList} = this.props
        const clss = this.props.classById ? (
            <div className="col s12">
                <div className="post">
                    <h3 className="center" style={{ color: '#880e4f ' }}><em>Welcome To Our Classroom</em></h3>

                    <h6 className="center"><strong>" Class Id: {this.props.classById.id},
                        Number Of Students: {this.props.classById.numberOfStudents},
                        Class Average: {this.props.classById.classAvg},
                        Class Type: {this.props.classById.classRoomType} "</strong></h6>

                    <h4 style={{ color: '#f50057' }}><em>ClassRoom Rules:-</em></h4>
                    <p><strong>* Work quality.</strong></p>
                    <p><strong>* Share new ideas.</strong></p>
                    <p><strong>* Learn from mistakes.</strong></p>
                    <p><strong>* Always do your best.</strong></p>
                    <p><strong>* Be creative.</strong></p>


                    <br />
                    <h4 style={{ color: '#f50057' }}><em>Students ClassRoom List:-</em></h4>
                    {this.props.studentList.length ? studentList.map(student => {
                        return (
                            <ul className="collection" key={student.id}>
                                <li className="collection-item active">
                                    Student ID: {student.id} &nbsp;&nbsp;
                                    LastName: {student.lastName} &nbsp;&nbsp;
                                    FirstName: {student.firstName} &nbsp;&nbsp;
                                    AvgGrade: {student.avgGrade} &nbsp;&nbsp;
                                    Gender: {student.gender} &nbsp;&nbsp;
                                    Class_Id: {student.class_id} &nbsp;&nbsp;
                                </li>
                            </ul>
                        )
                    }) :
                        (
                            <div className="center">The Class IS Empty...</div>
                        )
                    }
                </div>
            </div>
        )
            : (
                <div className="center">Loading new class...</div>
            )

        return (
            <div className="container">
                {clss}
            </div>)
    }

}


// get state from redux into props
const mapStateToProps = (store_state, current_props) => {
    // returns the new props
    return {
        ...current_props,
        studentList: store_state.my_students,
        classById: store_state.classById
    }
}

// dispatch action to redux
const mapDispatchToProps = (dispatch) => {
    return {
        class_By_Id: getClass => dispatch({ type: 'class_By_Id', getClass  }),
        studint_List_By_Id: getStudentList => dispatch({ type: 'studint_List_By_Id', getStudentList })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(StudentsClass);
