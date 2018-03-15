import { DrawerNavigator } from "react-navigation";
import ExpenseModule from '../Expenses/ExpensesModule';
import CategoryModule from "../Categories/CategoryModule";
import Logout from "../User/Logout";

const DrawerMenu = DrawerNavigator({
    Expenses: {
      screen: ExpenseModule,
    },
    Categories: {
      screen: CategoryModule,
    },
    Logout: {
      screen: Logout
    }
  });

export default DrawerMenu;