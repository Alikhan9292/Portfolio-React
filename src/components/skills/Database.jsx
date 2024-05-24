import React from "react";

const Database = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Database</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">MySql</h3>
							<span className="skills__level">
								<progress max="100" value="80" />
							</span>
						</div>
					</div>

					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">PostgreSql</h3>
							<span className="skills__level">
								<progress max="100" value="60" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Database;
