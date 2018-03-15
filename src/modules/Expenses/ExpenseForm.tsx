import * as React from "react";
import { Container, Header, Content, Text } from "native-base";
import { connect } from "react-redux";

type Props = {
    actions: any
};

type State = {
};

class ExpenseForm extends React.Component<Props, State> {

  state = {
  };


  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Hello ExpenseForm</Text>
        </Content>
      </Container>
    );
  }
}

const mapsStateToProps = (state: any) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
    }
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(ExpenseForm);
