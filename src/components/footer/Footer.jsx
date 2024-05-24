import React from "react";
import "./footer.css";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title" aria-hidden="true">Footer</h1>
				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">
							Projects
						</a>
					</li>
				</ul>
				<div className="footer__social">
				<a
   href="https://www.linkedin.com/in/%D3%99%D0%BB%D0%B8%D1%85%D0%B0%D0%BD-%D2%9B%D0%B0%D0%B6%D0%BC%D2%B1%D1%85%D0%B0%D0%BD%D0%BE%D0%B2-512352308/"
   className="footer__social-link"
   target="_blank"
   rel="noopener noreferrer">
   <i className="bx bxl-linkedin-square"></i>
</a>
<a
   href="https://gitlab.com/gigazahych"
   className="footer__social-link"
   target="_blank"
   rel="noopener noreferrer">
   <i className="bx bxl-git"></i>
</a>
<a
   href="https://github.com/Alikhan9292"
   className="footer__social-link"
   target="_blank"
   rel="noopener noreferrer">
   <i className="bx bxl-github"></i>
</a>

				</div>
				<span className="footer__copy">
					&#169;Kazhmukhanov Alikhan. All rights reerved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
