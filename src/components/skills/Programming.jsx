import React from "react";

const Programming = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Programming Languages</h3>

			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">Java</h3>
							<span className="skills__level">
								<progress max="100" value="50" />
							</span>
						</div>
					</div>

					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">JavaScript</h3>
							<span className="skills__level">
								<progress max="100" value="60" />
							</span>
						</div>
					</div>
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">c++</h3>
							<span className="skills__level">
								<progress max="100" value="10" />
							</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">HTML</h3>
							<span className="skills__level">
								<progress max="100" value="75" />
							</span>
						</div>
					</div>

					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">CSS</h3>
							<span className="skills__level">
								<progress max="100" value="75" />
							</span>
						</div>
					</div>
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">Python</h3>
							<span className="skills__level">
								<progress max="100" value="40" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Programming;
