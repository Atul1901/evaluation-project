import UsersScreen from "../pages/UsersScreen";
import CompaniesScreen from "../pages/CompaniesScreen";
import RoleScreen from "../pages/RoleScreen";
import WholeSaler from "../pages/WholeSaler";

export const routes = [
  { path: "/userscreen", cName: UsersScreen },
  { path: "/companies", cName: CompaniesScreen },
  { path: "/", cName: RoleScreen },
  { path: "/wholesaler", cName: WholeSaler },
];
