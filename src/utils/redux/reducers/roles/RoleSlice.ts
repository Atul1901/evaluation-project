// import { lightGreen } from "@mui/material/colors";
import { createSlice } from "@reduxjs/toolkit";
import {
  saveToStorage,
  clearStorage,
  removeFromStorage,
  fetchFromStorage,
} from "../../../localStorage";

const fromStorage: RoleSlice[] = fetchFromStorage("rolesLocalData");
interface RoleSlice {}
const RoleSlice = createSlice({
  name: "roles",
  initialState: fetchFromStorage("rolesLocalData") || ([] as RoleSlice[]),
  reducers: {
    addRole(state, action) {
      state.push(action.payload);
      // state = [...state, action.payload];
      console.log("action.payload:", action.payload);
      console.log("state", state);
    },
    editRole(state, action) {},
    deleteRole(state, action) {},
  },
});

export const { addRole, editRole, deleteRole } = RoleSlice.actions;
console.log(RoleSlice.actions);
export default RoleSlice.reducer;
export const GetRolesData = (state: { roleSlice: any }) => state.roleSlice;
