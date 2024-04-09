import UsersScreen from "../pages/UsersScreen";
import CompaniesScreen from "../pages/CompaniesScreen";
import RoleScreen from "../pages/RoleScreen";
import WholeSaler from "../pages/WholeSaler";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";

export const routes = [
  { path: "/", cName: Signin },
  { path: "/userscreen", cName: UsersScreen },
  { path: "/companies", cName: CompaniesScreen },
  { path: "/wholesaler", cName: WholeSaler },
  { path: "/signup", cName: Signup },
  { path: "/signin", cName: Signin },
  { path: "/roles", cName: RoleScreen },
];
