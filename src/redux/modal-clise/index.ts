import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  authoriationModalVisibilaty: boolean;
}

const initialState: InitialStateType = {
  authoriationModalVisibilaty: false,
};

const modalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    setAuthoriationModalVisibilaty(state) {
      state.authoriationModalVisibilaty = !state.authoriationModalVisibilaty;
    },
  },
});

export const { setAuthoriationModalVisibilaty } = modalSlice.actions;
export default modalSlice.reducer;
