
import { StackNavigator } from "react-navigation";
import { HOCHeader } from '../shared/Header';
import Login from "./Login";
import Register from "./Register";

const routeConfig = {
    Login: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        title: 'Login',
        header: HOCHeader("Login")
      }),
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => ({
        title: 'Create Account',
        header: HOCHeader("Create Account")
      }),
    }
  }
  
  
  const StackNavigatorConfig = {
    // initialRouteName: 'Login',
  }
  
  const UserModule = StackNavigator(routeConfig, StackNavigatorConfig) ;
  
  export default UserModule;