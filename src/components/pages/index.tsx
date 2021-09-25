import React, { FunctionComponent, useContext } from "react";
import CanvasView from "../CanvasView";
import Topbar from "../Topbar";
import { motion } from "framer-motion";
import { CurrentContext } from "src/context/current";
import surgeryScenarioDescription from "src/scenarios/surgery_room";

const ViewPage: FunctionComponent = () => {
	const { currentIndex, setCurrentIndex } = useContext(CurrentContext);

	const description = surgeryScenarioDescription[currentIndex];

	return (
		<div className={`page flex flex-row`}>
			{description !== undefined && (
				<div className={`absolute z-50 w-full h-16 opacity-80 bg-black text-white`}>
					<div className={`ml-5 pt-1 w-full flex flex-col items-start`}>
						<a className={`font-mono text-gray-50 font-black text-xl`}>{description.Name}</a>
						<span className={`text-gray-200 font-mono`}>{description.Description}</span>
					</div>
				</div>
			)}
			<div className={`relative h-full`} style={{ width: `100%`, color: "#FFFFFF" }}>
				<CanvasView setCurrentIndex={setCurrentIndex} />
			</div>
		</div>
	);
};

const Index = () => {
	return (
		<div className={`relative`}>
			<Topbar></Topbar>
			<img
				className={`absolute w-full h-full pb-96 content object-cover overflow-y-hidden`}
				src={`/hospitalroom.jpg`}
			></img>
			<div
				className={`page relative bg-green-900 bg-opacity-60 blur-effect flex flex-row justify-center items-center`}
			>
				<div className={`h-20 mr-112 font-klavika flex flex-col items-start`}>
					<a className={`font-jaapokkisub text-gray-50 font-black text-7xl`}>MedicIn</a>
					<span className={`text-gray-200 italic font-mono`}>
						empowering the next generation of healthcare students
					</span>
					<button
						className={`button-gradient pl-5 pr-5 pt-2 pb-2 mt-6 rounded-full text-white font-black font-mono`}
						onClick={() => {
							document.getElementById("root")!.scrollTo(0, document.getElementById("root")!.scrollHeight);
						}}
					>
						Get Started
					</button>
				</div>
				<motion.img
					initial={{ opacity: "0%" }}
					animate={{ opacity: "100%" }}
					transition={{ duration: 0.5 }}
					src="/medlogo.png"
					className={`absolute ml-124 w-auto h-96`}
				></motion.img>
			</div>
			<ViewPage />
		</div>
	);
};

export default Index;
