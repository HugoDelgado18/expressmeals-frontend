import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../images/cooking.png';

function Login({isloggedin, setIsLoggedin, setCurrentUser}) {
    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3005/user/username/${username}`);
        const data = await res.json();

        setCurrentUser(data[0]);
        console.log(data[0]);
        console.log(isloggedin);
        setIsLoggedin(!isloggedin);
        console.log(isloggedin);
        

        navigate('/Subscriptions');
    }

    console.log(isloggedin)
    return ( 
        <>
        <div className='signup-container' >
        <div >
            <form className='signup-form' onSubmit={handleSubmit} >
            <div>
            <div className='signup-form-label'>
                <h1><b>Login</b></h1>
            </div>
            <div className='form-group'>
            <input type="text" placeholder='Your Username' className='email-input-field'
                value={username} onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            {/* <div className='form-group'>
            <input type="text" placeholder='Password' className='email-input-field'
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            </div> */}
            <button type='submit' role="button" className="btn btn-success btn-lg">Login</button>
            </div>
            <div> <img src={img} alt='cooking image' width="400vw" /></div>
            </form>    
        </div>
     
        </div>
        </>
     );
}

export default Login;