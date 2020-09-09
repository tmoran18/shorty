import React from 'react';
import styles from './Card.module.css';

const Card = ({ icon_path, title, blurb, offset }) => {
	return (
		<div id={styles.card} style={{ transform: `${offset}` }}>
			<div>
				<img src={icon_path} alt='' />
			</div>
			<h3>{title}</h3>
			<p>{blurb}</p>
		</div>
	);
};

export default Card;
