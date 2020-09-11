import React from 'react';
import styles from './LinkInput.module.css';

const LinkInput = () => {
	return (
		<div id={styles.linkInput_container}>
			<input type='text' placeholder='Shorten a link here...' />
			<button>Shorten It!</button>
			<span>Please add a link (must have http or https)</span>
		</div>
	);
};

export default LinkInput;
