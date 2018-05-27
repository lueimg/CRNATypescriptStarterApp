import * as React from "react";
import Slides from "./Slides";
import { NavigationScreenProp } from "react-navigation";

type Props = {
    navigation: NavigationScreenProp<any, any>
};

type State = {
};

class SplashScreen extends React.Component<Props, State> {


  state = {
      data: [
        { text: 'Welcome' },
        { text: 'To Hungry' },
        { text: 'Set your location' }, 
      ]
  };

  completeSlides = () => {
    this.props.navigation.navigate('login');
  }
  

  render() {
      console.log('*** pros', this.props)
      return <Slides data={this.state.data} onComplete={this.completeSlides} />;
  }
}

export default SplashScreen;
