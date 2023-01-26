import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../images/cooking.png';

function Signup({isLoggedin, setIsLoggedin}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
            email: email,
            address: address
        }

        const res = await fetch("http://localhost:3005/user", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                newUser
            )
        });
        const data = await res.json();
        setFirstname("");
        setLastname("");
        setUsername("");
        setAddress("");
        setEmail("");
        setPassword("");
        setIsLoggedin(!isLoggedin);

        navigate("/Login");
    }

    return ( 
        <>
        <div className='signup-container' >
        <div >
            <form className='signup-form' onSubmit={handleSignup} >
            <div>
            <div className='signup-form-label'>
                <h1><b>Sign up</b></h1>
            </div>
            
            <div className='form-group'>
            <input type="text" placeholder='Your First Name' className='email-input-field' 
                value={firstname} onChange={(e) => setFirstname(e.target.value)}
            />
            </div>
            <div className='form-group'>
            <input type="text" placeholder='Your Last Name' className='email-input-field'
                value={lastname} onChange={(e) => setLastname(e.target.value)}
            />
            </div>
            <div className='form-group'>
            <input type="text" placeholder='Your Username' className='email-input-field'
                value={username} onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className='form-group'>
            <input type="text" placeholder='Your Address' className='email-input-field'
                value={address} onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            <div className='form-group'>
            <input type="email" placeholder='Your Email' className='email-input-field' 
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className='form-group'>
            <input type="text" placeholder='Password' className='email-input-field' />
            </div>
            <div className='form-group'>
            <input type="text" placeholder='Repeat your password' className='email-input-field' 
                value={password} onChange={(e) => setPassword(e.target.value)}           
            />
            </div>
            <button type="submit" role="button" className="btn btn-success btn-lg">Register</button>
            </div>
            <div> <img src={img} alt='cooking image' width="400vw" /> <br/> <a href='/Login' style={{paddingLeft: "15%"}}>Already have account?</a> </div>
            </form>
           
        </div>
     
        </div>
        </>
     );
}

export default Signup;