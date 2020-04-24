import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosWithAuth from '../utils/AxiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	useEffect(() => {
		AxiosWithAuth()
			.get('/api/colors')
			.then((res) => {
				console.log(res);
				setColorList(res.data);
			})
			.catch((err) => console.log('AN ERROR HAS OCCURED', err));
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
