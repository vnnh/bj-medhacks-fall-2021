import React, { createContext, useState } from "react";

interface ContextValue {
	currentIndex: number;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CurrentContext = createContext<ContextValue>(null as unknown as ContextValue);

const CurrentProvider: React.FunctionComponent = (props) => {
	const [currentIndex, setCurrentIndex] = useState(-1);
	return (
		<CurrentContext.Provider value={{ currentIndex, setCurrentIndex }}>{props.children}</CurrentContext.Provider>
	);
};

export { CurrentProvider, CurrentContext };
