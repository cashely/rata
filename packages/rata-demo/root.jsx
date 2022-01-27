import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Routes, Route} from 'react-router-dom';
import { Provider } from '@rata/react-mobx';

import admin from './src/pages/admin/store';

import js from './src/pages/admin/rata.json';

const App = (props) => {
	return (
		<Provider store={{}}>
			<HashRouter>
				<Routes>
					REACT_ROUTES
				</Routes>
			</HashRouter>
		</Provider>
		// <div path="111">index3</div>
	)
}

render(<App />, document.body)