import React, {useState, useEffect } from 'react';
import { GoogleLogin,googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Search from './pages/Search';
import Results from './pages/Results';

  
function App() {

    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

return (
    <Router>

    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/results' element={<Results/>} />
        <Route path='/history' element={<History/>} />
    </Routes>
    <div>



            <h2>Match Maker Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture}/>
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <GoogleLogin onSuccess={() => login()}/>
            )}
        </div>

    </Router>


);
}


export default App;