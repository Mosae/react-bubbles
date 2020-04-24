import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = (props) => {
	const [colorList, setColorList] = useState([]);
	useEffect(() => {
		axiosWithAuth()
			.get('/api/colors')
			.then((res) => {
				console.log('response', res);
				setColorList(res.data);
			})
			.catch((err) => console.log('AN ERROR HAS OCCURED', err));
	}, [props]);

	return (
		<>
			<ColorList props={props} colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
