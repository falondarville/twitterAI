import React from 'react';
import { createStackNavigator, navigationOptions } from 'react-navigation';
import twitterLogIn from './components/twitterLogIn.js';

const RootStack = createStackNavigator(
  {
    Login: twitterLogIn
  },
  {
    initialRouteName: 'Login'
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


