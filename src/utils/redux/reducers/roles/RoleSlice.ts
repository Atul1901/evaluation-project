// import { lightGreen } from "@mui/material/colors";
import { createSlice } from "@reduxjs/toolkit";
const RoleSlice = createSlice({
  name: "roles",
  initialState: [
    {
      user_name: "",
      organization_name: "",
      created_date: "",
      role_state: "",
      role_id: "",
    },
  ],
  reducers: {
    addRole(state, action) {
      // state.push(action.payload);
      state = [...state, action.payload];
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
