import React, { Component } from "react";
import Switch from "react-switch";

class Header extends Component {
	titles = [];

	constructor() {
		super();
		this.state = { checked: false };
		this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
	}

	onThemeSwitchChange(checked) {
		this.setState({ checked });
		this.setTheme();
	}

	setTheme() {
		var dataThemeAttribute = "data-theme";
		var body = document.body;
		var newTheme =
			body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
		body.setAttribute(dataThemeAttribute, newTheme);
	}

	render() {
		if (this.props.sharedData) {
			var name = this.props.sharedData.name;
			var title = this.props.sharedData.title.toUpperCase();
		}

		return (
			<header id='home'>
				<div className='row aligner header-container'>
					<div className='col-md-12'>
						<div>
							<span
								className='iconify header-icon'
								data-icon='la:laptop-code'
								data-inline='false'
							></span>
							<br />
							<h1 className='mb-0'>{name}</h1>
							<h2 className='title-container'>{title}</h2>
							<Switch
								checked={this.state.checked}
								onChange={this.onThemeSwitchChange}
								offColor='#baaa80'
								onColor='#353535'
								className='react-switch mx-auto'
								width={90}
								height={40}
								aria-label='Changer le thème'
								uncheckedIcon={
									<span
										className='iconify icon-switch'
										data-icon='twemoji:owl'
										data-inline='false'
									></span>
								}
								checkedIcon={
									<span
										aria-label='Bouton pour enlever le mode sombre'
										className='iconify icon-switch sun-icon-switch'
										data-icon='noto-v1:sun-with-face'
										data-inline='false'
									></span>
								}
								id='icon-switch'
							/>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
