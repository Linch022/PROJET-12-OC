import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
	render() {
		const images = this.props.data.images || [];
		if (this.props.data) {
			const technologies = this.props.data.technologies;
			var title = this.props.data.title;
			var description = this.props.data.description;
			var url = this.props.data.url;
			var github = this.props.data.github;
			if (this.props.data.technologies) {
				var tech = technologies.map((icons, i) => {
					return (
						<li
							className='list-inline-item mx-3'
							key={i}
						>
							<span>
								<div className='text-center'>
									<i className={`${icons.class} project-tech-icons`}>
										<p className='text-center'>{icons.name}</p>
									</i>
								</div>
							</span>
						</li>
					);
				});
				if (this.props.data.images) {
					var img = images.map((elem, i) => {
						const src = `${process.env.PUBLIC_URL}/${elem}`;
						return (
							<div
								key={i}
								data-src={src}
							/>
						);
					});
				}
			}
		}
		return (
			<Modal
				{...this.props}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
				className='modal-inside'
			>
				<button
					onClick={this.props.onHide}
					className='modal-close'
				>
					<i className='fas fa-times fa-3x close-icon'></i>
				</button>
				<div className='col-md-12'>
					<div className='col-md-10 mx-auto slider-container'>
						<div className='slider-tab'>
							<span
								className='iconify slider-iconfiy'
								data-icon='emojione:red-circle'
								data-inline='false'
							></span>{" "}
							&nbsp;{" "}
							<span
								className='iconify slider-iconfiy'
								data-icon='twemoji:yellow-circle'
								data-inline='false'
							></span>{" "}
							&nbsp;{" "}
							<span
								className='iconify slider-iconfiy'
								data-icon='twemoji:green-circle'
								data-inline='false'
							></span>
						</div>
						<AwesomeSlider
							cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
							animation='scaleOutAnimation'
							className='slider-image'
							organicArrows={images.length > 1}
						>
							{img}
						</AwesomeSlider>
					</div>
					<div className='col-md-10 mx-auto'>
						<h3 className='modal-title'>
							{title}
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
							{github ? (
								<a
									href={github}
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fab fa-github github-link'></i>
								</a>
							) : null}
						</h3>
						<p className='modal-description'>
							{description &&
								description.split("\n").map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>
								))}
						</p>
						<div className='col-md-12 text-center'>
							<ul className='list-inline mx-auto'>{tech}</ul>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}

export default ProjectDetailsModal;
