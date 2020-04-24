import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosWithAuth from '../utils/AxiosWithAuth';

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
	return <></>;
};

export default Login;
