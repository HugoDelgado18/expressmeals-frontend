import React, { Component } from 'react';
import icon from '../../images/navicon.png';

function Header({ loginStatus, changeStatus, setCurrentUser, currentUser }) {

    const renderState = () => {
        if (!loginStatus) {
            return (
                <ul>
                    <li style={{ marginBottom: "1%" }}>
                        <a href='/Login'>
                            <button class="btn btn-outline-success">Login</button>
                        </a>
                    </li>
                    <li>
                        <a href='/Signup'>
                            <button class="btn btn-outline-success">Signup</button>
                        </a>
                    </li>
                    </ul>)
        } else {
            return (
                <li>
                    Hi,
                    <a href='/'>
                        <button onClick={signout} class="btn btn-outline-success">Sign out</button>
                    </a>
                </li>)
        }
    }


const signout = () => {
    changeStatus(false)
    setCurrentUser("");
    window.location.href = "/Login";
}


return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a href='/'> <img src={icon} /></a>
                <a class="navbar-brand" href="/">Express Meals</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Order</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        {renderState()}
                    </ul>
                </div>
            </div>
        </nav>

    </>
);
}

export default Header;