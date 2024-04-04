import { createSlice } from "@reduxjs/toolkit";

interface FilterSlice {
  data: [];
  inputData: {};
}
const FilterSlice = createSlice({
  name: "roles",

  initialState: {
    data: [],
    inputData: {},
  } as FilterSlice,

  reducers: {
    filterRole(state: any, action: any) {
      console.log("action:", action.payload);
      state.push(action.payload);
    },
  },
});

export const { filterRole } = FilterSlice.actions;

export default FilterSlice.reducer;
export const GetRolesData = (state: { filterSlice: any }) => state.filterSlice;
