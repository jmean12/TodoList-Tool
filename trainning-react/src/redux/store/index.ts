import {configureStore} from "@reduxjs/toolkit";
import todolist from "./todolist";
import modelist from "./mode";
import login from './login';

const store = configureStore({
	reducer: {
		todo: todolist,
		mode: modelist,
		login: login,
	},
});

export default store;