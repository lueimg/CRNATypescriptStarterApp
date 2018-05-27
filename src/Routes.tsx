import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import SplashScreen from './modules/Splash/SplashScreen';
import Login from './modules/User/Login';
import { HOCHeader } from './modules/shared/Header';
import Register from './modules/User/Register';
import ExpenseModule from './modules/Expenses/ExpensesModule';
import CategoryModule from './modules/Categories/CategoryModule';
import Logout from './modules/User/Logout';
  
const ScreenHeader = (title) => ({navigation}) => ({
    title: title,
    header: HOCHeader(title)
});

const RoutesApp = TabNavigator({
    // First Level
    splash: {
        screen: SplashScreen
    },
    login: {
        // Second Level
        screen: StackNavigator({
            Login: {
              screen: Login,
              navigationOptions: ScreenHeader('Login'),
            },
            Register: {
              screen: Register,
              navigationOptions: ScreenHeader('Create Account'),
            }
          })
    },
    App: {
        // Second level
        screen: DrawerNavigator({
            Expenses: {
              screen: ExpenseModule,
            },
            Categories: {
              screen: CategoryModule,
            },
            Logout: {
              screen: Logout
            }
        })
    }
}, {
    navigationOptions: {
        tabBarVisible: false
    }
}) ;
  
  export default RoutesApp;