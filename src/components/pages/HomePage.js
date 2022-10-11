import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitate } from '../../redux/actions';

const HomePage = () => {

	const user = useSelector(state => state.currentUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAuth = () => {
		if(user) {
			dispatch(logoutInitate())
		}
		setTimeout(() => {
			navigate('/login')
		},2000)
	}


	return (
		<div>
			<hi>Главная страница</hi>
			<button onClick={handleAuth}>LOG OUT</button>
		</div>
	);
};

export default HomePage;