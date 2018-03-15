import { TabNavigator } from "react-navigation";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const ExpenseModule = TabNavigator({
  Home: { screen: ExpenseForm },
  Settings: { screen: ExpenseList },
});

export default ExpenseModule;