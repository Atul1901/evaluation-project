import { configureStore, Reducer } from "@reduxjs/toolkit";
import RoleSlice from "../reducers/roles/RoleSlice";

const store = configureStore({
  reducer: {
    roles: RoleSlice,
  },
});

export default store;
