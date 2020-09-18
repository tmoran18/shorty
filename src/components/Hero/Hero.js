import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import styles from '../Hero/Hero.module.css';

const Hero = () => {
	return (
		<div id={styles.heroSection} className='container flex_5050'>
			<div className={styles.hero_text_container}>
				<h1>More than just shorter links</h1>
				<p>
					Build your brand's recognition and get detailed insights on how your
					links are performing
				</p>
				<ButtonPrimary button_text={'Get Started'} />
			</div>
			<div>
				<img
					className={styles.hero_img}
					src='./assets/rocket_ship.png'
					alt=''
				/>
			</div>
		</div>
	);
};

export default Hero;
