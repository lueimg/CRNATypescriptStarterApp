import * as React from "react";
import { Container, Header, Content, Text, Form, Item, Label, Input, Button, Spinner } from 'native-base';
import { connect } from "react-redux";
import { NavigationScreenProp } from 'react-navigation';
import { IStore } from '../../store/reducers/index';
import { actionUserFetch } from '../../store/actions/userActions';
type Props = {
    actions: any,
    navigation: NavigationScreenProp<any>,
    isLoading: boolean
};

type State = {
  email: string,
  password: string
};

class Login extends React.Component<Props, State> {

  state = {
    email: 'test@test.com',
    password: 'Qwerty'
  };

  login = () => {
    this.props.actions.loginUser({email: this.state.email, password: this.state.password});
  }

  goToRegister = () => {
    this.props.navigation.navigate('Register');
  }
  
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input style={{padding: 10}} keyboardType='email-address' onChangeText={(email) => this.setState({ email })} value={this.state.email} />
                </Item>
                <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input style={{padding: 10}}  onChangeText={(password) => this.setState({ password })} value={this.state.password} />
                </Item>
                <Button block style={{ margin: 20 }} onPress={this.login}>
                    <Text>Login</Text>
                </Button>
                <Button block transparent dark onPress={this.goToRegister}>
                    <Text >Register</Text>
                </Button>
                {this.props.isLoading && <Spinner />}
            </Form>
        </Content>
    </Container>
    );
  }
}

const mapsStateToProps = (state: IStore) => {
  // console.log('*** calls',  state.callInProgress);
  return {
    isLoading: state.callInProgress > 0
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      loginUser: (payload) => dispatch(actionUserFetch(payload))
    }
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Login);
