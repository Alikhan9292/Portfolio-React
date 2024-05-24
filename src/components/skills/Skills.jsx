import React from "react";
import "./skills.css";
import Programming from "./Programming";
import LibrariesOrFrameworks from "./LibrariesOrFrameworks";
import Database from "./Database";
import Serverside from "./Serverside";

const Skills = () => {
	return (
		<section className="skills section" id="skills">
			<h2 className="section__title">Умения</h2>
			<span className="section__subtitle">Мой уровень</span>
			<div className="skills__container container grid">
				<Programming />
				<LibrariesOrFrameworks />
				<Serverside />
				<Database />
			</div>
		</section>
	);
};

export default Skills;
