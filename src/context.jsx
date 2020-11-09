import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [events, setEvents] = useState([]);

	return (
		<AppContext.Provider
			value={{ events, setEvents }}
		>
			{children}
		</AppContext.Provider>
	);
};


export const useGlobalContext = () => {
	return useContext(AppContext);
};
  
export { AppContext, AppProvider };