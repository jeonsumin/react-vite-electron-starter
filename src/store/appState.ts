import { createSlice } from '@reduxjs/toolkit';

export type AppState = any;

const initialState: AppState = {};

const appState = createSlice({
  name: 'appState',
  initialState: initialState,
  reducers: {
    appStateUpdate: (state, action) => {
      state.appState = { ...state.appState, ...action.payload };
    },
  },
});

export const { appStateUpdate } = appState.actions;
export default appState.reducer;
