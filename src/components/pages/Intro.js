import React from 'react';
import { Link } from 'react-router-dom';
import coverImg from '../../images/cover.jpg';



function Intro({isloggedin, currentUser}) {
    console.log(currentUser);
    return (
        <>
            <div className='cover-section'>
                <img src={coverImg} width="100%" height="70%" style={{opacity: "70%"}} />
                <div className='cover-text'>
                    <h2>Take the stress</h2>
                    <h2>out of mealtime</h2>
                    <Link to={!isloggedin ? "/Signup" : "/Subscriptions"}><button className="btn btn-outline-success">View our plans</button></Link>
                </div>
            </div>
        </>
    );
}

export default Intro;