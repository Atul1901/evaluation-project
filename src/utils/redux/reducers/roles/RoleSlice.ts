import { createSlice } from "@reduxjs/toolkit";

interface RoleSlice {}
const RoleSlice = createSlice({
  name: "roles",

  initialState: [] as RoleSlice[],
  reducers: {
    addRole(state, action) {
      state.push(action.payload);
    },
    editRole(state, action) {
      const updatedRole = action.payload;

      const existingRoleIndex = state.findIndex(
        (role: any) => role.uniq_id === updatedRole.uniq_id
      );

      if (existingRoleIndex !== -1) {
        state[existingRoleIndex] = updatedRole;
      }
    },
    deleteRole(state, action) {
      state = state.filter((role: any) => role.uniq_id !== action.payload);

      return state;
    },
    // filterRole(state, action) {
    //   console.log("action:", action.payload);
    //   state.push(action.payload);
    // },
  },
});

export const { addRole, editRole, deleteRole } = RoleSlice.actions;

export default RoleSlice.reducer;
export const GetRolesData = (state: { roleSlice: any }) => state.roleSlice;
