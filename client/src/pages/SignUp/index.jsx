import React, { useState } from 'react';
import './style.scss';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../utils/mutations';
import Auth from '../../utils/auth';
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [signin] = useMutation(SIGNUP)
  const handleSignUp = async (e) => {
    e.preventDefault();
    const {data} = await signin({
      variables: {firstName, lastName, email, password}
    })
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    Auth.login(data?.signin.token)
  };

  return (
    <div className="container mt-4">
      <div className="card sign-up-card">
        <div className="card-body">
          <h5 className="card-title">Sign Up</h5>

          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
