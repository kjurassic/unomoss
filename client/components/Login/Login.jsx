import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SignupForm from './SignupForm.jsx';
import LoginForm from './LoginForm.jsx';

const Login = () => {
  // const [isToggled, setToggled] = useState(false);
  // const toggleTrueFalse = () => setToggled(!isToggled);
  const [newUser, setLoggedIn] = useState(false);
  const handleClick = (e) => {
    setLoggedIn(!newUser);
  };
  return (
    <div>
      {newUser ? (
        <SignupForm handleClick={handleClick} />
      ) : (
          <LoginForm handleClick={handleClick} />
        )}
    </div>
  );
};

export default Login;
