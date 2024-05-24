import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className="qualification section" id="portfolio">
			<h2 className="section__title">Квалификация</h2>
			<span className="section__subtitle">Мой личный путь</span>
			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}>
						<i className="uil uil-graduation-cap qualification__icon"></i>{" "}
						Образование
					</div>
				</div>
				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}>
						<div className="qualification__data">
							<div className="">
								<h3 className="qualification__title">
									Бакалавр "Digital managent and Design"
								</h3>
								<span className="qualification__subtitle">
									Narxoz university
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>2021-2025
								</div>
							</div>
							<div className="">
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div className=""></div>

							<div className="">
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div className="">
								<h3 className="qualification__title">
								Уровень английского языка - Средний 2
								</h3>
								<span className="qualification__subtitle">
								JUST SPEAK IT курсы английского языка 
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>2021
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div className="">
								<h3 className="qualification__title">Родные языки</h3>
								<span className="qualification__subtitle">
									(Казахский, русский)
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>****
								</div>
							</div>
							<div className="">
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
