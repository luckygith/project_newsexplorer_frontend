import React from "react";
import "../About/About.css";
import authorImage from "../../assets/authorImage.jpg";

function About() {
	return (
		<section className="author">
			<div className="author__image-container">
				<img
					src={authorImage}
					alt=""
					className="author__image"
				/>
			</div>
			<div className="author__content">
				<h2 className="author__title">About the author</h2>
				<div className="author__description">
					<p>
						This block describes the project author. Here you should indicate
						your name, what you do, and which development technologies you know.
					</p>
					<p>
						You can also talk about your experience with TripleTen, what you
						learned there, and how you can help potential customers.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
