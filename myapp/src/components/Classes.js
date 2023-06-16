import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ClassImg from './../Class.jpg'
import './Classes.css'



class Classes extends Component {
    state = {
        classes: []
    }
    render() {
        const { classes } = this.state
        const classesList = classes.length ?
            (classes.map(clss => {
                return (
                    <div className=" class-list" key={clss.id}>
                        <div className="row">
                                <div className="card ">
                                    <div className="card-image">
                                        <img src={ClassImg} alt="a class image" />
                                    </div>
                                    <div className="card-content">
                                        <p>Class ID : {clss.id}</p>
                                        <p> Number Of Students : {clss.numberOfStudents}</p>
                                        <p> Class Avg : {clss.classAvg}</p>
                                        <p> ClassRoom Type : {clss.classRoomType}</p>
                                    </div>
                                    <div>
                                        <Link to={`/class/${clss.id}`}>
                                            <button className="btn waves-effect waves-light center" type="submit" name="action">Show Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                )
            }))
            : (<div className="center">No classes to show</div>)
        return (
            <div>
                <h4 className="center" style={{ color: '#880e4f' }}><em>ClassRooms List</em></h4>
                <div className="cardContainer">
                    {classesList}
                </div>
            </div>)
    }
    componentDidMount() {
        axios.get('http://localhost:8086/api/class')
            .then(res => {
                console.log(res);
                this.setState({
                    classes: res.data
                });
            })
    }
}

export default Classes;