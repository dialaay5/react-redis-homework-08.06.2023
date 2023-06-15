import React, { Component } from 'react'
import axios from 'axios'
import './Create.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert';

class CreateStudent extends Component {
    state = {
        new_student_data: {
            id: 0,
            lastName: "",
            firstName: "",
            avgGrade: "",
            gender: "",
            class_id: ""
        },
        idClass: null
    }

    handleChange = (e) => {
        this.setState({
            new_student_data: {
                ...this.state.new_student_data, [e.target.name]: e.target.value
                // ...this.state.new_student_data (זאת אומרת לקחת את השדות כפי שהם ולהוסיף להם את הערך שהוקלד לכל שדה)
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, lastName, firstName, avgGrade, gender, class_id } = this.state.new_student_data
        axios.post('http://localhost:8086/api/student', { id, lastName, firstName, avgGrade, gender, class_id })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                   idClass: res.data.class_id
                }) 
                
                Swal({
                    icon: 'success',
                    title: 'Greate...',
                    text: 'You have been succeeded in creating a new student!!',
                })
            })
            .catch((error) => {
                console.log(error);
                Swal({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something wrong with student information!!',
                })
            });

        this.setState({
            new_student_data: {
                lastName: "",
                firstName: "",
                avgGrade: "",
                gender: "",
                class_id: ""
            }
        })
    }
    render() {
        return (
            <div>
                <Link to={`/class/${this.state.idClass}`}>
                    <span ><i className="material-icons">keyboard_backspace</i>Back To Students ClassRoom Page </span>
                </Link>
                <h4 className="center" style={{ color: '#880e4f' }}><em>Create New Student</em></h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-student-div">
                        <h5>Fill with student information :-</h5>
                        <p>Last Name :
                            <input placeholder="Enter Student Last Name" name="lastName" type="text" id="lastName" onChange={this.handleChange}
                                value={this.state.new_student_data.lastName} required /></p>

                        <p>First Name :
                            <input placeholder="Enter Student First Name" name="firstName" type="text" id="firstName" onChange={this.handleChange}
                                value={this.state.new_student_data.firstName} required /></p>

                        <p>Average Grade :
                            <input placeholder="Enter Student Average Grade" name="avgGrade" type="number" id="avgGrade" onChange={this.handleChange}
                                value={this.state.new_student_data.avgGrade} required /></p>

                        <p>Gender :
                            <input placeholder="Enter MALE / FEMALE" name="gender" type="text" id="gender" onChange={this.handleChange}
                                value={this.state.new_student_data.gender} required /></p>

                        <p>Class Id:
                            <input placeholder="Enter Class Id" name="class_id" type="number" id="class_id" onChange={this.handleChange}
                                value={this.state.new_student_data.class_id} required /></p>

                        <div className="button-div">
                            <button className="btn waves-effect waves-light center" type="submit" name="action">
                                <i className="material-icons right">create</i>Create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateStudent