import * as React from "react";
import { connect } from "react-redux";
import { IStore } from './store/reducers/index';
import { AppLoading } from 'expo';
import { ExpoActions } from './store/actions/expoActions';
import { UserActions } from './store/actions/userActions';
import RoutesApp from "./Routes";

type Props = {
    actions: any,
    isUserAuthenticated: any,
    isExpoFontLoaded: boolean
};

type State = {
};

class App extends React.Component<Props, State> {

  state = {
  };

  componentDidMount() {
    this.props.actions.fetchExpoFonts();
    this.props.actions.initializeFirebaseUser();
  }

  render() {
    if (!this.props.isExpoFontLoaded) return <AppLoading />;
    return <RoutesApp />
  }
}

const mapsStateToProps = (state: IStore) => {
  return {
    isUserAuthenticated: !!state.user,
    isExpoFontLoaded: state.expoFont,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      fetchExpoFonts: () => dispatch(ExpoActions.fetchFonts()),
      initializeFirebaseUser: () => dispatch(UserActions.userOnAuthStateChanged()),
    }
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(App);
