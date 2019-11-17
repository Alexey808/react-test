import React from 'react';
import {Redirect} from 'react-router-dom';

const ItemPage4Redirect = () => {
	alert('test redirect');
	return (
		<div>
			<Redirect to={'/'}/>
		</div>
	);
};

export default ItemPage4Redirect;
