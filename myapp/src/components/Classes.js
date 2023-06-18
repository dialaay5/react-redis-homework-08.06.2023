import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ClassImg from './../Class.jpg'
import './Classes.css'
import { connect } from 'react-redux';

//with redux
class Classes extends Component {
    componentDidMount() {
        axios.get('http://localhost:8086/api/class')
            .then(res => {
                console.log(res);
                this.props.save_classes_data(res.data);
            })
    }

    render() {
        console.log(this.props);
        const { classesList } = this.props
        const class_list = classesList.length ? (classesList.map(clss => {
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
        })

        ) : (<div className="center">No classes to show</div>)

        return (
            <div>
                <h4 className="center" style={{ color: '#880e4f' }}><em>ClassRooms List</em></h4>
                <div className="cardContainer">
                    {class_list}
                </div>
            </div>
        )

    }
}

// get state from redux into props
const mapStateToProps = (store_classes_state, current_props) => {
    // returns the new props
    return {
        ...current_props,
        classesList: store_classes_state.my_classes
    }
}

// dispatch action to redux
const mapDispatchToProps = (dispatch) => {
    return {
        save_classes_data: getList => dispatch({ type: 'save_classes_data', getList }),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Classes);




