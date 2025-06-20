import React, { Component } from "react";

class Skills extends Component {
	render() {
		if (this.props.sharedSkills && this.props.resumeBasicInfo) {
			var sectionName = this.props.resumeBasicInfo.section_name.skills;
			var skills = this.props.sharedSkills.icons.map(function (skills, i) {
				return (
					<li
						className='list-inline-item mx-3'
						key={i}
					>
						<span>
							<div className='text-center skills-tile'>
								<i className={skills.class}>
									<p className='text-center'>{skills.name}</p>
								</i>
							</div>
						</span>
					</li>
				);
			});
		}

		return (
			<section id='skills'>
				<div className='col-md-12'>
					<div className='col-md-12'>
						<h2 className='section-title'>
							<span className='text-white'>{sectionName}</span>
						</h2>
						<p className='section-pres'>
							Voici les compétences que j'ai acquises au cours de mon
							apprentissage du développement web. <br /> J'ai également pu
							développer des compétences en SEO, accessibilité et gestion de
							projet.
						</p>
					</div>
					<div className='col-md-12 text-center'>
						<ul className='list-inline mx-auto skill-icon'>{skills}</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
