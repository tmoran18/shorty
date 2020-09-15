import React, { useState } from 'react';
import styles from './LinkCard.module.css';

const LinkCard = ({ url, hashid }) => {
	const [copySuccess, setCopySuccess] = useState('Copy');

	const copyToClipboard = () => {
		navigator.clipboard.writeText(`https://rel.ink/${hashid}`);
		setCopySuccess('Copied!');
		setTimeout(() => {
			setCopySuccess('Copy');
		}, 5000);
	};

	return (
		<div id={styles.linkCard_container}>
			<div>{url}</div>
			<div>
				<span className={styles.link_url}>{`https://rel.ink/${hashid}`}</span>
				<button
					className={
						copySuccess === 'Copy'
							? styles.primary_btn_color
							: styles.tertiary_btn_color
					}
					onClick={copyToClipboard}>
					{copySuccess}
				</button>
			</div>
		</div>
	);
};

export default LinkCard;
