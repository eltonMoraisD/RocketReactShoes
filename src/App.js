import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';

import { Provider } from 'react-redux';

//esse import precisa vir antes do import store
import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';

import Header from './components/Header/index';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes />
				<GlobalStyles />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
