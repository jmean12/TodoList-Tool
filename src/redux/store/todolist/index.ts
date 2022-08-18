import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	memoInput: { id:1, memo: '' },
};

export const TodoSlice = createSlice({
	name: "todoList",
	initialState,
	reducers:{
		createTodos: (state:any, action) => {			
			let text = { memo: action.payload.memo, id: state.memoInput.id++ };																
			state.todos.push(text);
			state.memoInput.memo = '';
			return
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((ele:any)=> {
				return ele.id !== action.payload
			})
		},
	},
});

export const { createTodos, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;