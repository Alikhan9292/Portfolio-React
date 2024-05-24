import React from "react";

const Info = () => {
	return (
		<div className="about__info grid">
			<div className="about__box">
				<i className="bx bx-award about__icon"></i>
				<h3 className="about__title">Опыт</h3>
				<span className="about__subtitle">Опыта работы нет</span>
			</div>
			<div className="about__box">
				<i className="bx bx-briefcase-alt about__icon"></i>
				<h3 className="about__title">Завершенные</h3>
				<span className="about__subtitle">Проекты</span>
			</div>
		</div>
	);
};

export default Info;
