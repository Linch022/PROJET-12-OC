import React, { Component } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
	render() {
		if (this.props.resumeExperience && this.props.resumeBasicInfo) {
			var sectionName = this.props.resumeBasicInfo.section_name.experience;
			var work = this.props.resumeExperience.map(function (work, i) {
				const technologies = work.technologies;
				const mainTechnologies = work.mainTech;
				var techIcon = work.mainTech[0].toLowerCase();
				var url = work.url;

				var mainTech = mainTechnologies.map((technology, i) => {
					return (
						<Badge
							pill
							className='main-badge mr-2 mb-2'
							key={i}
						>
							{technology}
						</Badge>
					);
				});
				var tech = technologies.map((technology, i) => {
					return (
						<Badge
							pill
							className='experience-badge mr-2 mb-2'
							key={i}
						>
							{technology}
						</Badge>
					);
				});
				return (
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date={work.years}
						iconStyle={{
							background: "#AE944F",
							color: "#fff",
							textAlign: "center",
						}}
						icon={<i className={`fab fa-${techIcon} experience-icon`}></i>}
						key={i}
					>
						<div className='experience-maintech'>{mainTech}</div>

						<h3 className='vertical-timeline-element-title experience-title'>
							{work.title}
							{url ? (
								<a
									href={url}
									target='_blank'
									rel='noopener noreferrer'
									className='link-href'
								>
									<i className='fas fa-external-link-alt url-link'></i>
								</a>
							) : null}
						</h3>
						<h4 className='vertical-timeline-element-subtitle experience-company'>
							{work.company}
						</h4>
						<div className='experience-tech'>{tech}</div>
					</VerticalTimelineElement>
				);
			});
		}

		return (
			<section
				id='resume'
				className='pb-5'
			>
				<div className='col-md-12 mx-auto'>
					<div className='col-md-12'>
						<h2 className='section-title'>
							<span className='text-black'>{sectionName}</span>
						</h2>
					</div>
				</div>
				<div className='col-md-8 mx-auto'>
					<VerticalTimeline>
						{work}
						<VerticalTimelineElement
							iconStyle={{
								background: "#AE944F",
								color: "#fff",
								textAlign: "center",
							}}
							icon={
								<i className='fas fa-hourglass-start mx-auto experience-icon'></i>
							}
						/>
					</VerticalTimeline>
				</div>
			</section>
		);
	}
}

export default Experience;
