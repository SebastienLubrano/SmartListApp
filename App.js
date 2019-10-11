import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import LandingScreen from './screens/LandingScreen';
import TasksScreen from './screens/TasksScreen';
import LogInScreen from './screens/LogInScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Landing: {
    screen: LandingScreen
  },
  LogIn : {
    screen: LogInScreen
  }
})

const AppContainer = createAppContainer(AppNavigator);


class App extends Component {

  state = { dataLoaded: false }

  fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf')
    });
  };


  render() {

    if (!this.state.dataLoaded) {
      return (
        <AppLoading
          startAsync={this.fetchFonts}
          onFinish={() => this.setState({dataLoaded: true})}
          onError={(err) => console.log(err)}
        />
      );
    }


    return (
      <AppContainer />
    );
  }

};

export default App;