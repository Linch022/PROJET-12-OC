import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deps: {},
			detailsModalShow: false,
		};
	}

	render() {
		let detailsModalShow = (data) => {
			this.setState({ detailsModalShow: true, deps: data });
		};

		let detailsModalClose = () => this.setState({ detailsModalShow: false });
		if (this.props.resumeProjects && this.props.resumeBasicInfo) {
			var sectionName = this.props.resumeBasicInfo.section_name.projects;
			var projects = this.props.resumeProjects.map(function (projects) {
				return (
					<div
						className='col-sm-12 col-md-6 col-lg-4'
						key={projects.title}
						style={{ cursor: "pointer" }}
					>
						<span className='portfolio-item d-block'>
							<div
								className='foto'
								onClick={() => detailsModalShow(projects)}
							>
								<div>
									<img
										src={`${process.env.PUBLIC_URL}/${projects.images[0]}`}
										alt='Projets'
										height='230'
										style={{
											marginBottom: 0,
											paddingBottom: 0,
											position: "relative",
											objectFit: "contain",
										}}
									/>
									<span className='project-date'>{projects.startDate}</span>
									<br />
									<h3 className='project-title-settings mt-3'>
										{projects.title}
									</h3>
								</div>
							</div>
						</span>
					</div>
				);
			});
		}

		return (
			<section id='portfolio'>
				<div className='col-md-12 content-container'>
					<h2
						className='section-title'
						style={{ color: "black" }}
					>
						<span>{sectionName}</span>
					</h2>
					<p className='section-pres'>
						Voici une sélection de projets que j'ai réalisés au cours de ma
						formations et de mes expériences personnelles. <br />
						Chaque projet m'a permis de renforcer mes compétences en
						développement front-end, en particulier avec JavaScript et React.
					</p>
					<div className='col-md-12 mx-auto'>
						<div className='row mx-auto'>{projects}</div>
					</div>
					<ProjectDetailsModal
						show={this.state.detailsModalShow}
						onHide={detailsModalClose}
						data={this.state.deps}
					/>
				</div>
			</section>
		);
	}
}

export default Projects;
