import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import fb from "../../assets/fb.svg";
import github from "../../assets/github.svg";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p className="footer__text">© 2024 Supersite, Powered by News API </p>
				<ul className="footer__links">
					<div className="footer__links-hyperlink-container">
						<li>
							<Link
								className="footer__links-hyperlink footer__links-home"
								target="_blank"
							>
								Home
							</Link>
						</li>
						<li>
							<a
								className="footer__links-hyperlink footer__links-company`"
								href="https://tripleten.com/"
								target="_blank"
							>
								Tripleten
							</a>
						</li>
					</div>
					<div className="footer__links-social-container">
						<li>
							<a
								className="footer__links-social"
								href="https://github.com/luckygith/project_newsexplorer_frontend/"
								target="_blank"
							>
								<img
									src={github}
									alt="github link"
								/>
							</a>
						</li>
						<li>
							<a
								className="footer__links-social"
								href="https://facebook.com/"
								target="_blank"
							>
								<img
									src={fb}
									alt="facebook link"
								/>
							</a>
						</li>
					</div>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
