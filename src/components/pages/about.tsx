import React from "react";
import Topbar from "../Topbar";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className={`relative`}>
			<Topbar></Topbar>
			<img className={`absolute w-full h-full content object-cover overflow-y-hidden`} src={`/black.jpg`}></img>
			<motion.div
				initial={{ opacity: "90%" }}
				animate={{ opacity: "60%" }}
				transition={{ duration: 0.5 }}
				className={`page relative bg-green-900 blur-effect flex flex-row justify-center items-center`}
			>
				<motion.div
					initial={{ opacity: "0%" }}
					animate={{ opacity: "100%" }}
					transition={{ duration: 0.5 }}
					className={`w-96 flex flex-col items-start`}
				>
					<a className={`font-jaapokkisub text-gray-50 font-black text-4xl`}>Motivation</a>
					<span className={`text-gray-200 font-mono`}>
						Due to the COVID-19 pandemic and the subsequent lockdowns that followed, it has become clear
						that there is a need for digital experiences to be able to supplement hands-on learning
						experiences.
					</span>
					<div className={`h-5`} />
					<a className={` font-jaapokkisub text-gray-50 font-black text-4xl`}>Solution</a>
					<span className={`text-gray-200 font-mono`}>
						In response to this need, we have created this product to help current and upcoming medical
						students to be able to learn virtually when they cannot receive hands-on experience due to
						COVID-19 lockdowns.
					</span>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;
