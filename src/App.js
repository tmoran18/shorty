import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import LinkInput from './components/LinkInput/LinkInput';

function App() {
	return (
		<div className='App'>
			<BurgerMenu />
			<Navbar />
			<Hero />
			<section id='inputs'>
				<LinkInput />
			</section>
			<section id='cards_heading' style={{ padding: '5px' }}>
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced
					statistics dashboard
				</p>
			</section>
			<section id='cards_container'>
				<div className='card_container'>
					<Card
						icon_path={'/assets/icon-brand-recognition.svg'}
						title={'Brand Recognition'}
						blurb={
							"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
						}
						offset={'translateY(-50px)'}
					/>
					<Card
						icon_path={'/assets/icon-detailed-records.svg'}
						title={'Detailed Records'}
						blurb={
							'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
						}
					/>
					<Card
						icon_path={'/assets/icon-fully-customizable.svg'}
						title={'Fully Customizable'}
						blurb={
							'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement'
						}
						offset={'translateY(50px)'}
					/>
				</div>
			</section>
			<Banner />
			<Footer />
		</div>
	);
}

export default App;
