import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import twitterLogIn from './components/twitterLogIn.js';
import analytics from './components/analytics.js';

const RootStack = createStackNavigator(
  {
    Login: twitterLogIn,
    Home: analytics
  },
  {
    initialRouteName: 'Login'
  }
)

export default class App extends Component {
  render() {
    return (
      <RootStack />
      )
  }
}
