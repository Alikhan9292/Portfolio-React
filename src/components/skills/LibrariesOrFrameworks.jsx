import React from "react";

const LibrariesOrFrameworks = () => {
	return (
		<div className="skills__content">
			<h3 className="skills__title">Libraries/Frameworks</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">React</h3>
							<span className="skills__level">
								<progress max="100" value="50" />
							</span>
						</div>
					</div>

					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">Spring</h3>
							<span className="skills__level">
								<progress max="100" value="20" />
							</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">Angular</h3>
							<span className="skills__level">
								<progress max="100" value="15" />
							</span>
						</div>
					</div>
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div className="">
							<h3 className="skills__name">SpringBoot</h3>
							<span className="skills__level">
								<progress max="100" value="30" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LibrariesOrFrameworks;
