import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import axiosWithAuth from '../utils/AxiosWithAuth';

const initialState = {
	username: '',
	password: '',
	isFetching: false,
};
const Login = (props) => {
	const [login, setLogin] = useState(initialState);
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route

	const handleChange = (e) => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	};
	const handleSubit = (e) => {
		e.preventDefault();
		setLogin({ ...login, isFetching: true });
		axiosWithAuth()
			.post('/api/login', login)
			.then((res) => {
				localStorage.setItem('token', res.data);
				props.history.push('bubble-page');
			})
			.catch((err) => console.log('Error logging in', err));
	};

	return (
		<div>
			<h1>I'm forever blowing bubbles, Pretty bubbles in the air</h1>
			<hr />
			<h3>Login</h3>
			<div>
				<form onSubmit={handleSubit}>
					<input
						label="Username"
						type="text"
						name="username"
						placeholder="username"
						value={login.username}
						onChange={handleChange}
					/>
					<br />
					<input
						label="Password"
						type="password"
						name="password"
						placeholder="password"
						value={login.password}
						onChange={handleChange}
					/>
					<br />
					<br />
					<button>Log In</button>
					{login.isFetching && 'Please wait...logging you in'}
				</form>
			</div>
		</div>
	);
};

export default Login;
