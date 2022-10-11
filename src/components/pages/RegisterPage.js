import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, } from 'react-router-dom';
import { registerInitiate } from '../../redux/actions';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [displayName, setDisplayName] = useState('');
	
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if(password !== passwordConfirm) {
			return;
		}
		dispatch(registerInitiate(email, password, displayName))
	}
	return (
		<div>
			
			<header>
				<Link to={'/login'}>SIGN IN</Link>
			</header>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
				<input value={email} onChange={(e) => setEmail(e.target.value)}/>
				<input type = 'password' value={password} onChange={(e) => setPassword(e.target.value)}/>
				<input type = 'password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
				<button type='submit'>SIGN UP</button>
			</form>
		</div>
	);
};

export default RegisterPage;