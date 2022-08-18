import {createSlice} from "@reduxjs/toolkit";

const initialState =  {
	darkMode: false,
};

export const ModeSlice = createSlice({
	name: "mode",
	initialState,
	reducers :{
		onDarkMode: (state) => {
			state.darkMode = true;
		},
		onWhiteMode: (state) => {
			state.darkMode = false;
		}
	},
});

export const { onDarkMode,onWhiteMode } = ModeSlice.actions;
export default ModeSlice.reducer;