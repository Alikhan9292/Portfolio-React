import React, { useState } from "react";
import "./header.css";

const Header = () => {
	// Изменение фона заголовка при прокрутке
	window.addEventListener("scroll", function () {
		const header = this.document.querySelector(".header");
		if (this.scrollY >= 80) {
			header.classList.add("scroll-header");
		} else {
			header.classList.remove("scroll-header");
		}
	});
	// Переключение меню
	const [Toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState("#home");
	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav__logo">
					Алихан
				</a>
				<div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list grid">
						<li className="nav__item">
							<a
								href="#home"
								onClick={() => setActiveNav("#home")}
								className={
									activeNav === "#home" ? "nav__link active-link" : "nav__link"
								}>
								<i className="uil uil-estate nav__icon"></i>Главная
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#about"
								onClick={() => setActiveNav("#about")}
								className={
									activeNav === "#about" ? "nav__link active-link" : "nav__link"
								}>
								<i className="uil uil-user nav__icon"></i>Обо мне
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#skills"
								className={
									activeNav === "#skills"
										? "nav__link active-link"
										: "nav__link"
								}>
								<i className="uil uil-file-alt nav__icon"></i>Навыки
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#handsOn"
								className={
									activeNav === "#handsOn"
										? "nav__link active-link"
										: "nav__link"
								}>
								<i className="uil uil-briefcase-alt nav__icon"></i>На практике
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#portfolio"
								className={
									activeNav === "#portfolio"
										? "nav__link active-link"
										: "nav__link"
								}>
								<i className="uil uil-scenery nav__icon"></i>Портфолио
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#contact"
								className={
									activeNav === "#contact"
										? "nav__link active-link"
										: "nav__link"
								}>
								<i className="uil uil-message nav__icon"></i>Контакты
							</a>
						</li>
					</ul>
					<i
						className="uil uil-times nav__close"
						onClick={() => showMenu(!Toggle)}></i>
				</div>
				<div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
