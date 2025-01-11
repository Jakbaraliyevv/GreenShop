import { createSlice } from "@reduxjs/toolkit";

interface ModalAuthorization {
  open: boolean;
  isLoading: boolean;
}

interface InitialStateType {
  authoriationModalVisibilaty: ModalAuthorization;
}

const initialState: InitialStateType = {
  authoriationModalVisibilaty: {
    open: false,
    isLoading: false,
  },
};

const modalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    setAuthoriationModalVisibilaty(state, { payload }) {
      state.authoriationModalVisibilaty = payload;
    },
  },
});

export const { setAuthoriationModalVisibilaty } = modalSlice.actions;
export default modalSlice.reducer;
