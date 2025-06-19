import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			foo: "bar",
			resumeData: {},
			sharedData: {},
		};
	}

	applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
		document.documentElement.lang = pickedLanguage;
		var resumePath =
			document.documentElement.lang === window.$primaryLanguage
				? `res_primaryLanguage.json`
				: `res_secondaryLanguage.json`;
		this.loadResumeFromPath(resumePath);
	}

	componentDidMount() {
		this.loadSharedData();
		this.applyPickedLanguage(
			window.$primaryLanguage,
			window.$secondaryLanguageIconId
		);
	}

	loadResumeFromPath(path) {
		fetch(path)
			.then((res) => {
				if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
				return res.json();
			})
			.then((data) => {
				this.setState({ resumeData: data });
			})
			.catch((err) => {
				alert(err);
			});
	}
	loadSharedData() {
		const path = `${process.env.PUBLIC_URL}/portfolio_shared_data.json`;
		fetch(path)
			.then((res) => {
				if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
				return res.json();
			})
			.then((data) => {
				this.setState({ sharedData: data });
				document.title = `${data.basic_info.name}`;
			})
			.catch((err) => {
				alert(err);
			});
	}

	render() {
		return (
			<div>
				<Header sharedData={this.state.sharedData.basic_info} />
				<About
					resumeBasicInfo={this.state.resumeData.basic_info}
					sharedBasicInfo={this.state.sharedData.basic_info}
				/>
				<Projects
					resumeProjects={this.state.resumeData.projects}
					resumeBasicInfo={this.state.resumeData.basic_info}
				/>
				<Skills
					sharedSkills={this.state.sharedData.skills}
					resumeBasicInfo={this.state.resumeData.basic_info}
				/>
				<Experience
					resumeExperience={this.state.resumeData.experience}
					resumeBasicInfo={this.state.resumeData.basic_info}
				/>
				<Footer sharedBasicInfo={this.state.sharedData.basic_info} />
			</div>
		);
	}
}

export default App;
