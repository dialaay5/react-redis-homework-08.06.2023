import React, { Component } from 'react'
import axios from 'axios'
import './Classes.css'

class StudentsClass extends Component {
    state = {
        clss: null,
        studintList: []
    }
    componentDidMount() {
        console.log(this.props)
        console.log(this.props.match.params.class_id)
        const _id = this.props.match.params.class_id

        axios.get(`http://localhost:8086/api/class/${_id}`)
            .then(res => {
                console.log(res);
                this.setState({
                    clss: res.data
                });
            })

        axios.get(`http://localhost:8086/api/student/dto/${_id}`)
            .then(res => {
                console.log(res);
                this.setState({
                    studintList: res.data.studentList
                });
            })
    }
    render() {
        const studintList = this.state.studintList
        const clss = this.state.clss ? (
            <div className="col s12">
                <div className="post">
                    <h3 className="center" style={{ color: '#880e4f ' }}><em>Welcome To Our Classroom</em></h3>

                    <h6 className="center"><strong>" Class Id: {this.state.clss.id},
                        Number Of Students: {this.state.clss.numberOfStudents},
                        Class Average: {this.state.clss.classAvg},
                        Class Type: {this.state.clss.classRoomType} "</strong></h6>

                    <h4 style={{ color: '#f50057' }}><em>ClassRoom Rules:-</em></h4>
                    <p><strong>* Work quality.</strong></p>
                    <p><strong>* Share new ideas.</strong></p>
                    <p><strong>* Learn from mistakes.</strong></p>
                    <p><strong>* Always do your best.</strong></p>
                    <p><strong>* Be creative.</strong></p>


                    <br />
                    <h4 style={{ color: '#f50057' }}><em>Students ClassRoom List:-</em></h4>
                    {this.state.studintList.length ? studintList.map(student => {
                        return (

                            <ul className="list-group">
                                <li className="list-group-item list-group-item-warning" >
                                    Student ID: {student.id} &nbsp;&nbsp;
                                    LastName: {student.lastName} &nbsp;&nbsp;
                                    FirstName: {student.firstName} &nbsp;&nbsp;
                                    AvgGrade: {student.avgGrade} &nbsp;&nbsp;
                                    Gender: {student.gender} &nbsp;&nbsp;
                                    Class_Id: {student.class_id} &nbsp;&nbsp;
                                </li>
                                <br/>
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

export default StudentsClass;