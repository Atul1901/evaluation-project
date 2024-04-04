import { configureStore } from "@reduxjs/toolkit";
import RoleSlice from "../reducers/roles/RoleSlice";

const store = configureStore({
  reducer: {
    roleSlice: RoleSlice,
  },
});

export default store;
