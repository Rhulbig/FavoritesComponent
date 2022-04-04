import React from 'react';

interface IProps {
	children: JSX.Element;
}

const BackGroundContainer: React.FC<IProps> = ({ children }) => {
	return <div className='jobifyBackGround'>{children}</div>;
};

export default BackGroundContainer;
