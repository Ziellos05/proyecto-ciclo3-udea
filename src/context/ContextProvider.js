import React, { createContext, useReducer } from 'react';
import * as Reducer from './reducers';
import * as InitialState from './initialState';


const AppContext = createContext();


const ContextProvider = ({ children }) => {

    /** handle authentication state of a user */
	const [authState, setAuthState] = useReducer(Reducer.AuthUser, InitialState.authUser);
	

	return (
		<AppContext.Provider
			value={{
				authState,
				setAuthState				
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;

export { AppContext };