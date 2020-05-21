import React from 'react';
import { ThemeProvider } from 'styled-components';

import useGlobalStates from '../hooks/useGlobalStates';

import GlobalStatesContext from '../contexts/GlobalStatesContext';

import GlobalStyle from '../styles/global';
import themeOrange from '../styles/theme-orange';

const withProviders = (WrappedComponent) => {
	const WithProviders = () => {
		const states = useGlobalStates();
		
		return (
			<ThemeProvider theme={themeOrange}>
		    <GlobalStatesContext.Provider value={states}>
			    <GlobalStyle />
					<WrappedComponent states={states}/>
				</GlobalStatesContext.Provider>
    	</ThemeProvider>
		);
	};
	
	return WithProviders;
};

export default withProviders;
