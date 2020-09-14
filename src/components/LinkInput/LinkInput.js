import Axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import styles from './LinkInput.module.css';
import axios from 'axios';
import LinkCard from '../LinkCard/LinkCard';

const LinkInput = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [input, setInput] = useState('');
	const loaded = useRef(false);
	const [count, setCount] = useState(0);

	//setItems(items => [...items, 'New Item']);

	const fetchLink = async () => {
		const result = await axios.post(`https://rel.ink/api/links/`, {
			url: input,
		});

		setData((data) => [...data, result.data]);
		setCount(() => count + 1);
		setInput('');
	};

	useEffect(() => {
		if (count === 0) {
			// try get Local Storage
			// if there is no data in localStorage, set state to empty Array
			if (localStorage.getItem('data') === null) {
				setData([]);
			} else {
				const retrievedData = JSON.parse(localStorage.getItem('data'));
				setData(retrievedData);
			}
			console.log('component did mount');
		} else {
			// set Local Storage
			localStorage.setItem('data', JSON.stringify(data));
			console.log('component Did Update');
		}
	}, [count]);

	return (
		<div>
			<div id={styles.linkInput_container}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type='text'
					placeholder='Shorten a link here...'
				/>

				<button onClick={fetchLink}>Shorten It!</button>
				<span>Please add a link (must have http or https)</span>
			</div>
			{data.map((link, index) => (
				<LinkCard key={index} url={link.url} hashid={link.hashid} />
			))}
		</div>
	);
};

export default LinkInput;
