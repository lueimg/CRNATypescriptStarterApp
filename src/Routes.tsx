import { StackNavigator, TabNavigator } from 'react-navigation';
import SplashScreen from './modules/Splash/SplashScreen';
import Login from './modules/User/Login';
import { HOCHeader } from './modules/shared/Header';
import Register from './modules/User/Register';
  
const ScreenHeader = (title) => ({navigation}) => ({
    title: title,
    header: HOCHeader(title)
  })

const RoutesApp = TabNavigator({
    splash: {
        screen: SplashScreen
    },
    login: {
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
    // menu: {
    //     screen: DrawerMenu
    // }
}, {
// initialRouteName: 'Login',
    navigationOptions: {
        tabBarVisible: false
    },
    lazy: true
}) ;
  
  export default RoutesApp;