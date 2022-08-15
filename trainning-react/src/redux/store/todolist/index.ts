import {createSlice} from "@reduxjs/toolkit";

export type Todos = {
	id:number,
	text:string,
};

const initialState = {
	todos: [],
};

export const TodoSlice = createSlice({
	name: "todoList",
	initialState,
	reducers:{

		createTodos: (state:any,action:any) => {
			let todo:any = { id: action.payload.id++ , text: action.payload.memo };
			// push가 아니라 concat으로 수정해야한다.
			state.todos.push(todo)
		},
		deleteTodo: (state:any, action:any) => {
			state.todos = state.todos.filter((ele:any)=> {
				return ele.id !== action.payload
			})
		},
	},
});

export const { createTodos,deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;