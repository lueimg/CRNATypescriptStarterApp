import * as React from "react";
import { Container, Header, Content, Text, Form, Item, Label, Input, Button, Spinner } from 'native-base';
import { connect } from "react-redux";
import { IStore } from '../../store/reducers/index';
import { NavigationScreenProp } from "react-navigation";

type Props = {
    actions: any,
    isLoading: boolean,
    navigation: NavigationScreenProp<any>,
    user: any
};

type State = {
};

class Register extends React.Component<Props, State> {

  state = {
    email: '',
    password: '',
  };

  goToLogin = () => {
    this.props.navigation.goBack()
  }

  registerUser = () => {
    
  }

  componentWillUpdate () {
    if (this.props.user) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <Container>
          <Content contentContainerStyle={{ flex: 1 }}>
              <Form >
                  <Item floatingLabel >
                      <Label>Email</Label>
                      <Input style={{padding: 10}} keyboardType='email-address' onChangeText={(email) => this.setState({ email })} value={this.state.email} />
                  </Item>
                  <Item floatingLabel last>
                      <Label>Password</Label>
                      <Input style={{padding: 10}} onChangeText={(password) => this.setState({ password })} value={this.state.password} />
                  </Item>
                  <Button block style={{ margin: 20 }} onPress={this.registerUser}>
                      <Text>Register</Text>
                  </Button>
                  <Button block transparent dark onPress={this.goToLogin}>
                      <Text >Login</Text>
                  </Button>
                  {this.props.isLoading && <Spinner />}
              </Form>
          </Content>
      </Container>
    );
  }
}

const mapsStateToProps = (state: IStore) => {
  return {
    isLoading: state.callInProgress > 0,
    user: state.user || null    
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
    }
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Register);
