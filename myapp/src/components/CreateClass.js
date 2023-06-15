import React, { Component } from 'react'
import axios from 'axios'
import './Create.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert';

class CreateClass extends Component {
    state = {
        new_classRoom_data: {
            id: 0,
            numberOfStudents: 0,
            classAvg: 0.0,
            classRoomType: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            new_classRoom_data: {
                ...this.state.new_classRoom_data, [e.target.name]: e.target.value
                // ...this.state.new_classRoom_data (זאת אומרת לקחת את השדות כפי שהם ולהוסיף להם את הערך שהוקלד לכל שדה)
            }
        })
        console.log(this.state.new_classRoom_data);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, numberOfStudents, classAvg, classRoomType } = this.state.new_classRoom_data
        axios.post('http://localhost:8086/api/class', { id, numberOfStudents, classAvg, classRoomType })
            .then(res => {
                console.log(res);
                console.log(res.data);
                Swal({
                    icon: 'success',
                    title: 'Greate...',
                    text: 'You have been succeeded in creating a new class!!',
                    footer: '<a href="">Back to the main page</a>'
                })
            })
            .catch((error) => {
                console.log(error);
                Swal({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something wrong with classRoom information!!',
                })
            });

        this.setState({
            new_classRoom_data: {
                classRoomType: ""
            }
        })
    }

    render() {
        return (
            <div>
                <Link to={`/`}>
                    <span ><i className="material-icons">keyboard_backspace</i>Back To Main Page</span>
                </Link>

                <h4 className="center" style={{ color: '#880e4f' }}><em>Create New ClassRoom</em></h4><br />

                <form onSubmit={this.handleSubmit}>
                    <div className="form-class-div">
                        <h5>Fill with classRoom information :-</h5><br />
                        <p>Number Of Students :
                            <input name="numberOfStudents" value="0" readOnly="readonly" /></p>

                        <p>Class Average :
                            <input name="classAvg" value="0.0" readOnly="readonly" /></p>

                        <p>Class Room Type :
                            <input placeholder="Enter REGULAR / EXTERNAL" name="classRoomType" type="text" id="classRoomType" onChange={this.handleChange}
                                value={this.state.new_classRoom_data.classRoomType} required /></p>

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
export default CreateClass