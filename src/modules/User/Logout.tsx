import * as React from "react";

import { connect } from "react-redux";
import { View, TouchableHighlight, Text } from "react-native";
import { IStore } from '../../store/reducers/index';
import { actionUserLogout } from "../../store/actions/userActions";

type Props = {
    actions: any,
    user: any
};

type State = {
};

class Logout extends React.Component<Props, State> {

  state = {
  };



  render() {
    return (
      <View>
        <Text>
            {this.props.user.email}
        </Text>
        <TouchableHighlight 

            onPressIn={() => this.props.actions.logout() } 
              style={{margin: 15, padding: 20, borderColor: '#000', justifyContent: 'center', backgroundColor: '#000'}}>
            <Text style={{color: '#fff'}}>Log out</Text>
        </TouchableHighlight>
    </View>
    );
  }
}

const mapsStateToProps = (state: IStore) => {
  return {
    user: state.user || {}
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      logout: () => dispatch(actionUserLogout())
    }
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Logout);
