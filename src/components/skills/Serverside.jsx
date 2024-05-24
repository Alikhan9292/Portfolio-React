import React from "react";

const Serverside = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Server-Side</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">PHP</h3>
							<span className="skills__level">
								<progress max="100" value="50" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Serverside;
