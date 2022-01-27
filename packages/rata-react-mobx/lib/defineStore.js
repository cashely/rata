import { makeAutoObservable } from 'mobx';

export default function defineStore(store) {
	return makeAutoObservable(store)
}