import { Provider, defineStore } from '@rata/react-mobx';
export default defineStore({
	value: 12,
	changeValue() {
		this.value++
	}
})