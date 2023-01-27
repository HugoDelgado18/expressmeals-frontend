import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Header from './components/sections/Header';
import Intro from './components/pages/Intro';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Subscription from './components/pages/Subscriptions';
import Order from './components/pages/Order';
import icon from './images/navicon.png';

function App() {
    const [isloggedin, setIsLoggedin] = useState(false);
    const [meals, setMeals] = useState();
    const [users, setUsers] = useState()
    const [currentUser, setCurrentUser] = useState();

    const fetchMeals = async () => {
        const res = await fetch("http://localhost:3005/meal");
        const data = await res.json();
        setMeals(data);
    }

    useEffect(() => {
        fetchMeals();
    }, [])

    const renderState = () => {
        if (!isloggedin) {
            return (
                <ul style={{listStyle: "none"}}>
                    <li style={{ marginBottom: "1%" }}>
                        <Link to='/Login'>
                            <button className="btn btn-outline-success">Login</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Signup'>
                            <button className="btn btn-outline-success">Signup</button>
                        </Link>
                    </li>
                </ul>)
        } else {
            return (
                <li>
                   <p> Hi, {currentUser.firstname} </p>
                    <Link to='/'>
                        <button onClick={signout} className="btn btn-outline-success">Sign out</button>
                    </Link>
                </li>)
        }
    }

    const signout = () => {
        setIsLoggedin(!isloggedin)
        setCurrentUser("");
        window.location.href = "/Login";
    }

    console.log(meals);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" > <img src={icon} /></Link>
                    <a className="navbar-brand" href="/">Express Meals</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Subscriptions">Order</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            {renderState()}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Header loginStatus={isloggedin} changeStatus={setIsLoggedin} setCurrentUser={setCurrentUser} currentUser={currentUser}/> */}
            <Routes>
                <Route path='/' element={<Intro isloggedin={isloggedin} currentUser={currentUser} />} />
                <Route path='/Login' element={<Login isloggedin={isloggedin} setIsLoggedin={setIsLoggedin} setCurrentUser={setCurrentUser} />} />
                <Route path='/Signup' element={<Signup isloggedin={isloggedin} setIsLoggedin={setIsLoggedin} />} />
                <Route path='/Subscriptions' element={<Subscription currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path='/Order' element={<Order meals={meals} />} />
            </Routes>


            {/* {users.map(user => <p>{user.firstname} {user.lastname}</p>)} */}

        </>
    );
}

export default App;