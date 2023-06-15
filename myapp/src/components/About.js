import React from 'react'
import ProfileImg from './../Avatar.jpg'
import Rainbow from './../hoc/Rainbow';



const About = (props) => {
    console.log(props)
    return (
        <div>
            <div className="container">
                <h4 className="center" style={{ color: '#880e4f' }}><em>About Me!</em></h4>
                <div className="card-image center">
                    <img src={ProfileImg} alt="a profile image" style={{ height: 350, width: 350 }} />
                </div>
                <p style={{ color: props.rainbow_color }}><strong>
                    Hi! My name is Diala Ayoub, 28 years old, from majdal shams, married and mother of one child.
                    I graduated with a bachelor's degree in economics and management from Tel-Hai college,
                    I worked for a year at Bank Hapoalim, and then I moved to the insurance agency's office as a claims portfolio manager for three years..
                    I am currently studying Full Stack, I entered the high-tech world out of interest and aspiration to advance and develop.
                    And I believe that with consistency and perseverance I will be able to break through..
                </strong></p>
            </div>
        </div>
    )
}

export default Rainbow(About)