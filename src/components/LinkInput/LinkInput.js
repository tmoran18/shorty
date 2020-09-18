import React, { useState, useEffect } from 'react';
import styles from './LinkInput.module.css';
import axios from 'axios';
import LinkCard from '../LinkCard/LinkCard';

const LinkInput = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState('');
	const [count, setCount] = useState(0);
	const [isLoading, setIsloading] = useState(false);
	const [showError, setShowError] = useState(false);

	//setItems(items => [...items, 'New Item']);

	const fetchLink = async () => {
		setIsloading(true);
		try {
			const result = await axios.post(`https://rel.ink/api/links/`, {
				url: input,
			});

			setData((data) => [...data, result.data]);
			setCount(() => count + 1);
			setInput('');
			setIsloading(false);
		} catch (error) {
			console.log(error);
			setIsloading(false);
			setShowError(true);
			return error.repsonse;
		}
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
		} else {
			// set Local Storage
			localStorage.setItem('data', JSON.stringify(data));
		}
	}, [count]);

	const showErrorMsg = () => {
		setTimeout(() => {
			setShowError(false);
		}, 5000);
		return (
			<div className={styles.errorMsg}>
				<span>
					There was an error shortening your link, please check the URL is valid
				</span>
			</div>
		);
	};

	return (
		<div className='container' style={{ transform: 'translateY(-70px)' }}>
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
			{showError && showErrorMsg()}

			{isLoading ? (
				<div className={styles.spinner}>
					<img src='./assets/infinity_spinner.gif' width='150' alt='' />
					<p>Shrinking your Link...</p>
				</div>
			) : (
				data.map((link, index) => (
					<LinkCard
						key={index}
						url={link.url}
						hashid={link.hashid}
						loading={isLoading}
					/>
				))
			)}
		</div>
	);
};

export default LinkInput;
