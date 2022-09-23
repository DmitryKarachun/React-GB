import { Link } from 'react-router-dom';
import React from 'react';

const Notfoundpage = () => {
	return (
		<div>
			Страница не найдена. Перейти на <Link to='/'>Главную</Link>
		</div>
	);
};

export default Notfoundpage;