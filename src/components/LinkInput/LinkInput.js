import Axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import styles from './LinkInput.module.css';
import axios from 'axios';
import LinkCard from '../LinkCard/LinkCard';

const LinkInput = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState('');
	const loaded = useRef(false);

	//setItems(items => [...items, 'New Item']);

	const fetchLink = async () => {
		const result = await axios.post(`https://rel.ink/api/links/`, {
			url: input,
		});

		setData((data) => [...data, result.data]);
		setInput('');
	};

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
			{data.map((link) => (
				<LinkCard url={link.url} hashid={link.hashid} />
			))}
		</div>
	);
};

export default LinkInput;
