import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Page } from '../Page/page.js';
import Section from '../sections/section.js';

class HomePage extends React.Component{

	render(){
		return (
			<Page>
				<Section title="Ramsay" type="primary">

				</Section>
				<Section title="Work" type="secondary">

				</Section>
				<Section title="Play" type="dark">

				</Section>
				<Section title="Hire" type="tertiary">

				</Section>
			</Page>
		)
	}
}

export default HomePage;
