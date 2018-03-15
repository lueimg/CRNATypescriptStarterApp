import { TabNavigator } from "react-navigation";
import CategoryList from "./CategoryList";


const CategoryModule = TabNavigator({
  List: { screen: CategoryList },
});

export default CategoryModule;