import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
	return (
		<div className={`z-10 absolute topbar top-0 flex justify-between items-center`}>
			<div className={`h-full flex flex-row align-middle items-center`}>
				<img src="/medlogo.png" className={`w-auto h-full full-opacity`}></img>
				<a className={`text-left font-jaapokkisub text-gray-50 font-black text-xl pt-1`}>MedicIn</a>
			</div>
			<div className={`flex-grow`}></div>
			<nav className={`block text-gray-50 mr-10`}>
				<Link className={`p-4 font-jaapokkisub`} to={`/`}>
					Home
				</Link>
				<Link className={`font-jaapokkisub`} to={`/about`}>
					About
				</Link>
			</nav>
		</div>
	);
};

export default Topbar;
