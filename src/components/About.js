import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import javaScriptIcon from "@iconify/icons-logos/javascript";
import cssIcon from "@iconify/icons-logos/css-3";
import htmlIcon from "@iconify/icons-logos/html-5";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";

class About extends Component {
	render() {
		if (this.props.sharedBasicInfo) {
			var profilepic =
				process.env.PUBLIC_URL + "/images/" + this.props.sharedBasicInfo.image;
		}
		if (this.props.resumeBasicInfo) {
			var sectionName = this.props.resumeBasicInfo.section_name.about;
			var hello = this.props.resumeBasicInfo.description_header;
			var about = this.props.resumeBasicInfo.description;
		}

		return (
			<section id='about'>
				<div className='col-md-12 content-container'>
					<h2 className='section-title'>
						<span>{sectionName}</span>
					</h2>
					<div className='row center mx-auto mb-5'>
						<div className='col-md-4 mb-5 center'>
							<div className='polaroid'>
								<span>
									<img
										height='250px'
										src={profilepic}
										alt='Nicolas Berthollet'
										className='profile-img'
									/>
									<Icon
										icon={javaScriptIcon}
										aria-label='JavaScript logo'
										className='tech-logo'
									/>
									<Icon
										icon={reactIcon}
										className='tech-logo'
										aria-label='React logo'
									/>
									<Icon
										icon={cssIcon}
										className='tech-logo'
										aria-label='CSS logo'
									/>
									<Icon
										icon={htmlIcon}
										className='tech-logo'
										aria-label='Html5 logo'
									/>
									<Icon
										icon={nodejsIcon}
										className='tech-logo'
										aria-label='NodeJS logo'
									/>
								</span>
							</div>
						</div>

						<div className='col-md-8 center'>
							<div className='col-md-10'>
								<div className='card'>
									<div className='card-header'>
										<span
											className='iconify'
											data-icon='emojione:red-circle'
											data-inline='false'
										></span>{" "}
										&nbsp;{" "}
										<span
											className='iconify'
											data-icon='twemoji:yellow-circle'
											data-inline='false'
										></span>{" "}
										&nbsp;{" "}
										<span
											className='iconify'
											data-icon='twemoji:green-circle'
											data-inline='false'
										></span>
									</div>
									<div className='card-body font-trebuchet ml-3 mr-3'>
										<br />
										<span className='wave'>{hello} :) </span>
										<br />
										<br />
										{about &&
											about.split("\n").map((line, index) => (
												<React.Fragment key={index}>
													{line}
													<br />
												</React.Fragment>
											))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
