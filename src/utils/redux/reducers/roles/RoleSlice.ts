import { createSlice } from "@reduxjs/toolkit";

interface RoleSliceState {
  data: any[];
  filter_data: any[];
  login_users: any[];
}

const RoleSlice = createSlice({
  name: "roleSlice",

  initialState: {
    data: [],
    filter_data: [],
    login_users: [
      {
        name: "Atul",
        phoneNum: "1234567890",
        emailId: "atul@gmail.com",
        dob: "01/01/2001",
        wru: "admin",
        password: "atul@gmail.com",
      },
    ],
  } as RoleSliceState,
  reducers: {
    addRole(state, action) {
      state.data.push(action.payload);
      state.filter_data.push(action.payload);
    },
    editRole(state, action) {
      const updatedRole = action.payload;

      const existingRoleIndex = state.data.findIndex(
        (role: any) => role.uniq_id === updatedRole.uniq_id
      );

      if (existingRoleIndex !== -1) {
        state.data[existingRoleIndex] = updatedRole;
        state.filter_data[existingRoleIndex] = updatedRole;
      }
    },
    deleteRole(state, action) {
      state.data = state.data.filter(
        (role: any) => role.uniq_id !== action.payload
      );
      state.filter_data = state.data.filter(
        (role: any) => role.uniq_id !== action.payload
      );
    },
    filterRole(state, action) {
      if (!!action.payload) {
        state.filter_data = state.data.filter(
          (data: any) =>
            action.payload.roleName?.toLowerCase() ===
              data.user_name.toLowerCase() ||
            action.payload.organizationName?.toLowerCase() ===
              data.organization_name.toLowerCase() ||
            action.payload.createdDate === data.created_date ||
            action.payload.roleState?.toLowerCase() ===
              data.role_state.toLowerCase() ||
            action.payload.roleID?.toLowerCase() === data.role_id.toLowerCase()
        );
      } else {
        state.filter_data = state.data;
      }
    },
    addLoginUser(state, action) {
      state.data.push(action.payload);
      state.login_users.push(action.payload);
    },
  },
});

export const { addRole, editRole, deleteRole, filterRole, addLoginUser } =
  RoleSlice.actions;

export default RoleSlice.reducer;

export const roles = (state: { roleSlice: RoleSliceState }) =>
  state.roleSlice.filter_data;

export const login_users = (state: { roleSlice: RoleSliceState }) =>
  state.roleSlice.login_users;
