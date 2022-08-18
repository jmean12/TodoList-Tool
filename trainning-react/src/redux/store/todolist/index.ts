import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	memoInput: { id:1, memo: '' },
};

export const TodoSlice = createSlice({
	name: "todoList",
	initialState,
	reducers:{
		onChangeTodos: (state:any, action) => {						
			state.memoInput.memo = action.payload.memo;
			state.memoInput.id = action.payload.id;
			return
		},
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

export const { createTodos, deleteTodo, onChangeTodos } = TodoSlice.actions;
export default TodoSlice.reducer;