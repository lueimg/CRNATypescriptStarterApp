import * as React from "react";
import { ScrollView, View, Text, Dimensions, Button } from "react-native";
import styled from 'styled-components';
const SCREEN_WIDTH = Dimensions.get('window').width;

const Slide = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: ${SCREEN_WIDTH}
`;

const SlideText = styled(Text)`
    font-size: 30px;
`;

class Slides extends React.Component<Props, State> {

    constructor(props) {
        super(props);
    }

    state = {
    };

    skipSplashScreen = () => {
      this.props.onComplete();
    }
    

  render() {
      const lastScreenIndex = this.props.data.length - 1;
      return (
        <ScrollView horizontal pagingEnabled style={{flex: 1}}>
            { this.props.data && this.props.data.map((slide, index) => (
                    <Slide key={slide.text}>
                        <SlideText>{slide.text}</SlideText>
                        { index === lastScreenIndex && 
                            <Button title='Skip' onPress={this.skipSplashScreen} /> 
                        }
                    </Slide>
                )
            )}
        </ScrollView>
      );
  }
}

export default Slides;

type Props = {
    data: any[],
    onComplete: Function
};

type State = {
};
