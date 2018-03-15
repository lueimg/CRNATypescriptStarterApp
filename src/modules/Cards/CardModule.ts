import { TabNavigator } from "react-navigation";
import CardList from "./CardList";


const CategoryModule = TabNavigator({
  List: { screen:  CardList },
});

export default CategoryModule;