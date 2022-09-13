import React from 'react';
import cl from './MyInput.module.css';

const MyInput = ({children, ...props}) => {
	return (
		<input type="text" {...props} className={cl.myInput} />
	);
};

export default MyInput;