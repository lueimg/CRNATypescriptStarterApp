import * as React from "react";
import { Container, Header, Content, Form, Item, Label, Input, Button, Text } from "native-base";
import { connect } from "react-redux";
import { userLogin, fetchUserGithub } from '../../store/actions/userActions';

export interface UserProps {
  user: any;
  actions: {
    userLogin: any,
    getUser: any,
  }
}

type State = {
  email: string;
  password: string;
};

class User extends React.Component<UserProps, State> {

  state = {
    password: "aa",
    email: ""
  };

  loginUser = () => {
    // this.props.actions.userLogin(this.state.email);
    this.props.actions.getUser(this.state.email);
  };

  onChangeEmail = (email: string) => {
    this.setState({ email });
  };
  onChangePassword = (password: string) => {
    this.setState({ password });
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input
                onChangeText={this.onChangeEmail}
                keyboardType={"email-address"}
                value={this.state.email}
              />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={this.onChangePassword}
                value={this.state.password}
              />
            </Item>
            <Button block onPress={this.loginUser}>
              <Text>Primary</Text>
            </Button>
          </Form>
          <Text>{this.props.user.bio}</Text>
        </Content>
      </Container>
    );
  }
}

const mapsStateToProps = (state: any) => {
  return {
    user: state.user || {}
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      userLogin: (email:string, password: string) => dispatch(userLogin(email, password)),
      getUser: (userName:string) => dispatch(fetchUserGithub(userName))
    }
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(User);
