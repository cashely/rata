import { observer, inject, MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
export default function Connect(props) {
	console.log(useContext(MobXProviderContext), '---')
	return <div>222</div>
}