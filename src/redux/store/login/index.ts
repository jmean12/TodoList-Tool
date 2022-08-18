import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo : { nickName: "", password: "", },
    onModal: false,
    userList : [],
};

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers : {
        LoginModalControl: (state) => {                              
            state.onModal = !state.onModal;
        },
        ChangeLoginInput: (state, action) => {
            state.userInfo.nickName = action.payload;
        },
    },
});

export const { LoginModalControl, ChangeLoginInput } = LoginSlice.actions;
export default LoginSlice.reducer;