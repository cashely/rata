import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Routes, Route} from 'react-router-dom';

const App = (props) => {
	return (
		<HashRouter>
			<Routes>
				REACT_ROUTES
			</Routes>
		</HashRouter>
		// <div path="111">index3</div>
	)
}

render(<App />, document.body)