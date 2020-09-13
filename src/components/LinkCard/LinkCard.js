import React from 'react';
import styles from './LinkCard.module.css';

const LinkCard = ({ url, hashid }) => {
	return (
		<div id={styles.linkCard_container}>
			<div>{url}</div>
			<div>
				<span>{`https://rel.ink/${hashid}`}</span>
				<button>Copy</button>
			</div>
		</div>
	);
};

export default LinkCard;
