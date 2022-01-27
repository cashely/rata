import React from 'react';
import { connect } from '@rata/react-mobx';
import store from './store';

export default connect('admin', (props) => {
	return (
		<div>admin.index{store.value}<button onClick={() => store.changeValue()}>changeValue</button></div>
	)
})